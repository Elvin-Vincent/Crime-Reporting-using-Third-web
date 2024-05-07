pragma solidity ^0.8.0;

contract DrugTraffickingReport {
    struct Report {
        uint256 id; // Report ID
        address reporter; // Address of the reporter
        string ipfsHash; // IPFS hash of the report data (description, location, media)
        uint256 timestamp; // Timestamp when the report was created
        bool verified; // Flag to indicate if the report is verified
    }

    Report[] private reports;

    address public authority;
    uint256 public reportIdCounter;

    event ReportSubmitted(
        uint256 indexed reportId,
        address reporter,
        string ipfsHash,
        uint256 timestamp
    );
    event ReportVerified(uint256 indexed reportId);

    constructor() {
        authority = msg.sender;
        reportIdCounter = 0;
    }

    function submitReport(string memory _ipfsHash) public {
        uint256 currentTimestamp = block.timestamp;
        reports.push(
            Report({
                id: reportIdCounter,
                reporter: msg.sender,
                ipfsHash: _ipfsHash,
                timestamp: currentTimestamp,
                verified: false
            })
        );

        emit ReportSubmitted(
            reportIdCounter,
            msg.sender,
            _ipfsHash,
            currentTimestamp
        );

        reportIdCounter++;
    }

    function verifyReport(uint256 _reportId) public {
        require(
            msg.sender == authority,
            "Only the authority can verify reports."
        );
        require(_reportId < reports.length, "Invalid report ID.");

        Report storage report = reports[_reportId];
        require(!report.verified, "Report is already verified.");

        report.verified = true;

        emit ReportVerified(_reportId);
    }

    function getReport(
        uint256 _reportId
    ) public view returns (uint256, address, string memory, uint256, bool) {
        require(_reportId < reports.length, "Invalid report ID.");
        Report storage report = reports[_reportId];
        return (
            report.id,
            report.reporter,
            report.ipfsHash,
            report.timestamp,
            report.verified
        );
    }

    function getAllSubmittedReports() public view returns (Report[] memory) {
        return reports;
    }

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
}
