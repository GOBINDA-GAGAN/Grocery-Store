"use client";
import { useState } from "react";
import {
  Checkbox,
  Slider,
  FormGroup,
  FormControlLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SidebarFilters() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 -z-50
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:relative sm:h-auto sm:shadow-none sm:rounded-2xl
          overflow-y-auto
        `}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end sm:hidden mb-2">
          <button
            className="text-gray-700 font-bold text-lg"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        {/* Category Filter */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {["Fruits & Vegetables", "Dairy", "Bakery", "Snacks", "Beverages"].map(
                (cat, i) => (
                  <FormControlLabel key={i} control={<Checkbox />} label={cat} />
                )
              )}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Divider />

        {/* Price Filter */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
            />
            <div className="flex justify-between text-sm">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Divider />

        {/* Rating Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Rating</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {[5, 4, 3, 2, 1].map((star) => (
                <FormControlLabel
                  key={star}
                  control={<Checkbox />}
                  label={`${star} ★ & up`}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Divider />

        {/* Availability Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Availability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="In Stock" />
              <FormControlLabel control={<Checkbox />} label="Out of Stock" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Divider />

        {/* Brand Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Brand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {["Amul", "Nestle", "Britannia", "Local"].map((brand, i) => (
                <FormControlLabel key={i} control={<Checkbox />} label={brand} />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </aside>
    </>
  );
}
