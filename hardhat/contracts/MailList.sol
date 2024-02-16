// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MailList {
    mapping(address => string[]) public ownerMailList;

    constructor() {}

    function subscribe(string calldata email) external {
        ownerMailList[msg.sender].push(email);
    }

    function getAllMailList(address from) external view returns (string[] memory) {
        return ownerMailList[from];
    }
}
