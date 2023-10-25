import * as React from "react";
import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

const numberOfResults = 10;

export default function Violations() {
  const [geoJsonData, setGeoJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://services3.arcgis.com/SCwJH1pD8WSn5T5y/arcgis/rest/services/Code_Violations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson"
    )
      .then((res) => res.json())
      .then((geoData) => {
        const features = geoData.features;

        // Map the features to rows for the table
        const rows = features.map((feature) => ({
          id: feature.properties.objectid,
          date: new Date(feature.properties.opendate).toLocaleDateString(),
          address: feature.properties.address,
          propertyOwner: feature.properties.propertyowner,
          caseNumber: feature.properties.casenumber,
          caseType: feature.properties.casetype,
        }));

        setGeoJsonData(rows);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Logic for Handling table pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * numberOfResults;
  const endIndex = startIndex + numberOfResults;
  const pageData = geoJsonData.slice(startIndex, endIndex);

  return (
    <React.Fragment>
      <Title>Recent Violations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Violation Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Property Owner</TableCell>
            <TableCell>Case Number</TableCell>
            <TableCell>Case Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pageData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.propertyOwner}</TableCell>
              <TableCell>{row.caseNumber}</TableCell>
              <TableCell>{row.caseType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {currentPage > 1 && (
        <Link
          color="primary"
          href="#"
          onClick={() => handlePageChange(currentPage - 1)}
          sx={{ mt: 3 }}
        >
          Previous Page
        </Link>
      )}
      {pageData.length === numberOfResults && (
        <Link
          color="primary"
          href="#"
          onClick={() => handlePageChange(currentPage + 1)}
          sx={{ mt: 3 }}
        >
          Next Page
        </Link>
      )}
    </React.Fragment>
  );
}
