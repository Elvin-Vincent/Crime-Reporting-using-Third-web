// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DrugTraffickingReport {

    struct Report {
        address reporter;      // Address of the reporter
        string ipfsHash;       // IPFS hash of the report data (description, location, media)
        uint256 timestamp;     // Timestamp when the report was created
        bool verified;         // Flag to indicate if the report is verified
    }

    Report[] private reports;

    address public authority; //Declares a public variable authority of type address, intended to represent the Ethereum address of the entity authorized to verify reports.

    event ReportSubmitted(uint indexed reportId, address reporter, string ipfsHash, uint256 timestamp);
    event ReportVerified(uint indexed reportId);

    constructor() {
        // sets the authority to the address of the user deploying the contract (msg.sender).
        authority = msg.sender; // Set the deploying address as the initial authority
    }

    // Function to submit a report
    function submitReport(string memory _ipfsHash) public {
        uint256 currentTimestamp = block.timestamp;
        reports.push(Report({
            reporter: msg.sender,
            ipfsHash: _ipfsHash,
            timestamp: currentTimestamp,
            verified: false
        }));

        emit ReportSubmitted(reports.length - 1, msg.sender, _ipfsHash, currentTimestamp);

// If the function reaches this point without reverting, submission was successful
        // return true;
    }

    // Function to verify a report
    function verifyReport(uint _reportId) public {
        require(msg.sender == authority, "Only the authority can verify reports.");
        require(_reportId < reports.length, "Invalid report ID.");

        Report storage report = reports[_reportId];
        require(!report.verified, "Report is already verified.");

        report.verified = true;

        emit ReportVerified(_reportId);
    }

    // Function to retrieve a report details using report id
    function getReport(uint _reportId) public view returns (address, string memory, uint256, bool) {
        require(_reportId < reports.length, "Invalid report ID.");
        Report storage report = reports[_reportId];
        return (report.reporter, report.ipfsHash, report.timestamp, report.verified);
    }


    // Function to view all submitted reports
    function getAllSubmittedReports() public view returns (Report[] memory) {
        return reports;
    }
    
    // Function to view all verified reports
    function getAllVerifiedReports() public view returns (Report[] memory) {
        uint verifiedCount = 0;
        for (uint i = 0; i < reports.length; i++) {
            if (reports[i].verified) {
                verifiedCount++;
            }
        }

        Report[] memory verifiedReports = new Report[](verifiedCount);
        uint j = 0;
        for (uint i = 0; i < reports.length; i++) {
            if (reports[i].verified) {
                verifiedReports[j] = reports[i];
                j++;
            }
        }

        return verifiedReports;
    }

    // Additional functions can be added for administrative purposes.
}