// Helper function defined outside of a contract
pragma solidity ^0.8.4;

contract Calculations {   
    function callAddMod(uint x, uint y, uint z) public pure returns(uint){
        return addmod(x, y, z);
    }
    function callMulMod() public pure returns(uint){
        return mulmod(4, 5, 3);
    }
    function calculateDistance(uint x) public pure returns (uint) {
        return x * 2;
    }

    function calculateSqrt(uint x) public  pure returns (uint y){
        uint z = (x+1)/2;
        y = x;
        while(z < y){
            y = z;
            z = (x / z + z)/2;
        }
    }


}
