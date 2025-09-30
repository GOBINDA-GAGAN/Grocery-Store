"use client";
import { useState } from "react";

import { Button } from "@mui/material";
import SidebarFilters from "@/components/Sidebar";
import ProductListing from "@/components/ProductListing";

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-6 md:px-8 py-4">
      {/* Mobile Filter Button */}
      <div className="sm:hidden w-full mb-2">
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => setSidebarOpen(true)}
        >
          Filters
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`sm:block ${sidebarOpen ? "block fixed z-50 top-0 left-0 h-full" : "hidden"}`}>
        <SidebarFilters />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Products Section */}
      <div className="flex-1">
        <ProductListing />
      </div>
    </div>
  );
}
