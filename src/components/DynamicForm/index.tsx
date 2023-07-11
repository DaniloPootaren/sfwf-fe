import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FormLayout } from "../../models";

const formLayout: FormLayout = {
  id: 2,
  createdAt: "2023-07-11T05:41:41.894Z",
  updatedAt: "2023-07-11T06:52:38.601Z",
  terms_and_condition: "template 2",
  section: [
    {
      id: 2,
      panel_title: "Information Details",
      text_selection: [
        {
          id: 7,
          label: "Test input",
        },
      ],
      phone_selection: [
        {
          id: 1,
          label: "phone number",
        },
      ],
      number_selection: [
        {
          id: 2,
          label: "Test",
          min_length: 5,
          max_length: 0,
        },
      ],
      choice_selection: [
        {
          id: 2,
          label: "Test",
          choices: [
            {
              id: 2,
              label: "choice 1",
            },
            {
              id: 8,
              label: "choice 2",
            },
            {
              id: 9,
              label: "choice 3",
            },
            {
              id: 10,
              label: "choice 4",
            },
          ],
        },
        {
          id: 4,
          label: null,
          choices: [],
        },
      ],
    },
    {
      id: 4,
      panel_title: "New Panel ",
      text_selection: [
        {
          id: 13,
          label: "Enter Range",
        },
      ],
      phone_selection: [
        {
          id: 2,
          label: "Public phone number",
        },
      ],
      number_selection: [
        {
          id: 4,
          label: "Reange",
          min_length: 5,
          max_length: 0,
        },
      ],
      choice_selection: [
        {
          id: 5,
          label: "Test",
          choices: [
            {
              id: 11,
              label: "choice 1",
            },
            {
              id: 12,
              label: "choice 2",
            },
          ],
        },
      ],
    },
  ],
};

const DynamicForm = () => {
  const { register, handleSubmit } = useForm<FormLayout>();
  const [expandedSection, setExpandedSection] = useState<number | false>(0);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleAccordionChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedSection(isExpanded ? panel : false);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formLayout.section.map((section) => (
        <Accordion
          key={section.id}
          expanded={expandedSection === section.id}
          onChange={handleAccordionChange(section.id)}
          style={{ margin: 10 }}
        >
          <AccordionSummary sx={{ backgroundColor: "#F2F6EE" }}>
            <Typography>{section.panel_title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ paddingX: 2 }}>
              <Grid container item xs={12} spacing={2}>
                {section.text_selection.map((field) => (
                  <Grid key={field.id} item xs={12} md={6}>
                    <TextField
                      name={field.label}
                      label={field.label}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {section.phone_selection.map((field) => (
                  <Grid key={field.id} item xs={12} md={6}>
                    <TextField
                      name={field.label}
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {section.number_selection.map((field) => (
                  <Grid key={field.id} item xs={12} md={6}>
                    <TextField
                      name={field.label}
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      inputProps={{ inputMode: "numeric" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {section.choice_selection.map(
                  (field) =>
                    field?.label && (
                      <Grid key={field.id} item xs={12} md={6}>
                        <h4>{field.label}</h4>
                        <RadioGroup name={field.label}>
                          {field.choices.map((choice) => (
                            <FormControlLabel
                              key={choice.id}
                              value={choice.label}
                              control={<Radio />}
                              label={choice.label}
                            />
                          ))}
                        </RadioGroup>
                      </Grid>
                    )
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button type="submit" variant="contained" color="primary" style={{marginLeft: 10}}>
        Submit Application
      </Button>
    </form>
  );
};

export default DynamicForm;
