// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MailList {
    mapping(address => string[]) public ownerMailList;

    constructor() {}

    function subscribe(address from, string calldata email) external {
        ownerMailList[from].push(email);
    }

    function getAllMailList(address from) external view returns (string[] memory) {
        return ownerMailList[from];
    }
}
