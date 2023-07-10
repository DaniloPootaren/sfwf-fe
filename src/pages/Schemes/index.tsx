import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SchemeCard from "../../components/schemeCard";
import { fetchSchemes } from "../../api/schemes";
import { Scheme } from "../../models";

const Schemes = () => {
  const [schemes, setSchemes] = useState<Scheme[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchSchemes();
    setSchemes(data.data.data);
  };
  return (
    <>
      <h1>Schemes Available</h1>
      <Grid container spacing={3}>
        {schemes?.map((scheme) => (
          <Grid item xs={12} sm={6} md={4}>
            <SchemeCard scheme={scheme} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Schemes;
