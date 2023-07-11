import React, { useEffect, useState } from "react";
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
import { fetchSchemeTemplateBySchemeId } from "../../api/schemes";
import { getMaupassVal } from "../../utils";
import { createApplication } from "../../api/application";

const DynamicForm = (props: { id?: number }) => {
  const { id } = props;
  // @ts-ignore
  const { register, handleSubmit } = useForm<any>();
  const [expandedSection, setExpandedSection] = useState<number | false>(0);
  const [formLayout, setFormLayout] = useState<FormLayout>();

  const onSubmit = async (data: any) => {
    try {
      await createApplication(data, id);
      alert("Application send successfully");
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  const handleAccordionChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedSection(isExpanded ? panel : false);
    };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchSchemeTemplateBySchemeId(id?.toString() as string);
    setFormLayout(data.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formLayout?.section.map((section) => (
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
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      {...register(field.label, { required: true })}
                      defaultValue={
                        field.default
                          ? field.default
                          : field.maupass
                          ? getMaupassVal(field.maupass!!)
                          : ""
                      }
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {section.phone_selection.map((field) => (
                  <Grid key={field.id} item xs={12} md={6}>
                    <TextField
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      {...register(field.label, { required: true })}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs={12} spacing={2}>
                {section.number_selection.map((field) => (
                  <Grid key={field.id} item xs={12} md={6}>
                    <TextField
                      label={field.label}
                      variant="outlined"
                      fullWidth
                      inputProps={{ inputMode: "numeric" }}
                      {...register(field.label, { required: true })}
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginLeft: 10 }}
      >
        Submit Application
      </Button>
    </form>
  );
};

export default DynamicForm;
