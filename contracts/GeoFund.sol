pragma solidity >=0.4.25 <0.6.0;

contract GeoConferenceRefund
{
    //Set of States
    enum StateType { Created, InTransit, Completed, OutOfCompliance}
    enum SensorType { None, latitude, longitude }

    //List of properties
    StateType public  State;
    address public  Owner;
    address public  InitiatingCounterparty;
    address public  Counterparty;
    address public  PreviousCounterparty;
    address public  Device;
    address public  Employee;
    address public  Employer;
    int public  MinLatitude;
    int public  MaxLatitude;
    int public  MinLongitude;
    int public  MaxLongitude;
    SensorType public  ComplianceSensorType;
    int public  ComplianceSensorReading;
    bool public  ComplianceStatus;
    string public  ComplianceDetail;
    int public  LastSensorUpdateTimestamp;

    constructor(address device, address Employee, address Employer, int MinLatitude, int MaxLatitude, int MinLongitude, int MaxLongitude) public
    {
        ComplianceStatus = true;
        ComplianceSensorReading = -1;
        InitiatingCounterparty = msg.sender;
        Owner = InitiatingCounterparty;
        Counterparty = InitiatingCounterparty;
        Device = device;
        Employee = Employee;
        Employer = Employer;
        MinLatitude = MinLatitude;
        MaxLatitude = MaxLatitude;
        MinLongitude = MinLongitude;
        MaxLongitude = MaxLongitude;
        State = StateType.Created;
        ComplianceDetail = "N/A";
    }

    function IngestTelemetry(int latitude, int longitude, int timestamp) public
    {
        // Separately check for states and sender 
        // to avoid not checking for state when the sender is the device
        // because of the logical OR
        if ( State == StateType.Completed )
        {
            revert();
        }

        if ( State == StateType.OutOfCompliance )
        {
            revert();
        }

        if (Device != msg.sender)
        {
            revert();
        }

        LastSensorUpdateTimestamp = timestamp;

        if (latitude > MaxLatitude || latitude < MinLatitude)
        {
            ComplianceSensorType = SensorType.latitude;
            ComplianceSensorReading = latitude;
            ComplianceDetail = "latitude value out of range.";
            ComplianceStatus = false;
        }
        else if (longitude > MaxLongitude || longitude < MinLongitude)
        {
            ComplianceSensorType = SensorType.longitude;
            ComplianceSensorReading = longitude;
            ComplianceDetail = "longitude value out of range.";
            ComplianceStatus = false;
        }

        if (ComplianceStatus == false)
        {
            State = StateType.OutOfCompliance;
        }
    }

    function TransferResponsibility(address newCounterparty) public
    {
        // keep the state checking, message sender, and device checks separate
        // to not get cloberred by the order of evaluation for logical OR
        if ( State == StateType.Completed )
        {
            revert();
        }

        if ( State == StateType.OutOfCompliance )
        {
            revert();
        }

        if ( InitiatingCounterparty != msg.sender && Counterparty != msg.sender )
        {
            revert();
        }

        if ( newCounterparty == Device )
        {
            revert();
        }

        if (State == StateType.Created)
        {
            State = StateType.InTransit;
        }

        PreviousCounterparty = Counterparty;
        Counterparty = newCounterparty;
    }

    function Complete() public
    {
        // keep the state checking, message sender, and device checks separate
        // to not get cloberred by the order of evaluation for logical OR
        if ( State == StateType.Completed )
        {
            revert();
        }

        if ( State == StateType.OutOfCompliance )
        {
            revert();
        }

        if (Owner != msg.sender && Employee != msg.sender)
        {
            revert();
        }

        State = StateType.Completed;
        PreviousCounterparty = Counterparty;
        Counterparty = 0x0000000000000000000000000000000000000000;
    }
}