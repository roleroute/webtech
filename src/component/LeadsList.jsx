import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as XLSX from "xlsx";

const LeadsContainer = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 20px;
  background: #fff;
  margin-bottom: 40px;
  margin-top: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  font-size: 25px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background: #f2f2f2;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LeadsList = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("https://webtechapi.vercel.app/leads");
        setLeads(response.data);
        setFilteredLeads(response.data.reverse());
      } catch (error) {
        console.error("Error fetching leads:", error);
        setError("Error fetching leads data");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  useEffect(() => {
    const filteredData = leads.filter((lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLeads(filteredData);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [searchTerm, leads]);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredLeads);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    XLSX.writeFile(workbook, "LeadsData.xlsx");
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <LeadsContainer>
      <Title>Leads</Title>
      <div className="lead-search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
      />
      <button onClick={handleExport} style={{ marginBottom: "20px", padding: "8px 12px" }}>
        Export
      </button>
      </div>
 
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {currentLeads.map((lead, i) => (
            <tr key={i}>
              <td style={{fontSize:14}}>{i+1}</td>
              <td style={{fontSize:14}}>{lead.name}</td>
              <td style={{fontSize:14}}>{lead.email}</td>
              <td style={{fontSize:14}}>{lead.phone}</td>
              <td style={{fontSize:14}}>{lead.subject || "N/A"}</td>
              <td style={{fontSize:14}}>{lead.message || "N/A"}</td>
              <td style={{fontSize:14}}>{new Date(lead.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <Button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </PaginationContainer>
    </LeadsContainer>
  );
};

export default LeadsList;
