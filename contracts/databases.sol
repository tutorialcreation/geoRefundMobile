pragma solidity >=0.4.22 <0.9.0;
contract PostgreSql {
    struct Request {
        bytes data;
        function(uint) external callback;
    }
    Request[] private requests;
    event NewRequest(uint);
    function query(bytes memory data, function(uint) external callback) public {
        requests.push(Request(data, callback));
        emit NewRequest(requests.length - 1);
    }
    function reply(uint requestID, uint response) public {
        // Here goes the check that the reply comes from a trusted source
        requests[requestID].callback(response);
    }
}