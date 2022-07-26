// Helper function defined outside of a contract
pragma solidity ^0.8.4;

library Calculations {   
    function callAddMod(uint x, uint y, uint z) public pure returns(uint){
        return addmod(x, y, z);
    }
    function callMulMod(uint x, uint y, uint z) public pure returns(uint){
        return mulmod(x, y, z);
    }
    function calculateSquare(uint x) public pure returns (uint) {
        return x * x;
    }

    function calculateSqrt(uint x) public  pure returns (uint y){
        uint z = (x+1)/2;
        y = x;
        while(z < y){
            y = z;
            z = (x / z + z)/2;
        }
    }

    function calculateSum(uint x, uint y) public pure returns (uint) {
        return x + y;
    }

    function calculateDiff(uint x, uint y) public pure returns (uint) {
        return x - y;
    }

}
