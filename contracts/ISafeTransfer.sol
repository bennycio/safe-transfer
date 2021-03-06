// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ISafeTransfer {
    event SafeTransferComplete(
        address indexed _from,
        address indexed _to,
        uint256 indexed amount
    );

    function initiateTransfer(address _to, bytes32 _secret) external payable;

    function pullTransfer(address _to) external;

    function completeTransfer(address _from, bytes memory _secret) external;

    function getTransfer(address _from) external view returns (uint256);
}
