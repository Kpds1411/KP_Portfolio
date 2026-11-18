const projectsData = [
  {
    key: "1",
    title: "Data Migration and Reporting of Trading Data",
    role: "Developer",
    tech: ["SSIS", "SQL Server", "Power BI", "Power Apps"],
    description: [
      "Designed and implemented SSIS packages to extract data from an on-premises SQL Server and Excel files, supporting insert, update, and delete operations to keep databases in sync. Scheduled the packages using SQL Server Agent jobs.",
      "Developed Power BI reports for a Dubai-based logistics and trading client using a data gateway, with Power Apps integration for real-time reporting.",
    ],
  },
  {
    key: "2",
    title: "Email & Attachment Data Migration and Reporting",
    role: "Mentor",
    tech: ["Azure Data Factory", "CRM", "Power BI"],
    description: [
      "Designed an Azure Data Factory pipeline for an Australia-based investment client to migrate email data and attachments from the CRM, with dynamic date ranges and target entities.",
      "Developed Power BI reports giving a complete overview of migrated emails and their attachments to track migration completeness.",
    ],
  },
  {
    key: "3",
    title: "Analysis and Reporting of an IT Firm's PMS System",
    role: "Mentor",
    tech: ["Power BI", "CRM"],
    description: [
      "Designed Power BI reports across four modules: Skill Assessment, Project Planning, Billing, and Timesheets, integrating data from the CRM system.",
      "Improved resource management and financial tracking through insights on capability gaps, utilization, revenue trends, and actual vs. billed hours.",
    ],
  },
  {
    key: "4",
    title: "Healthcare Embedded Analytics",
    role: "Developer",
    tech: ["Power BI", "MySQL", "PostgreSQL", "RLS"],
    description: [
      "Developed Power BI reports for a US-based healthcare client from MySQL and PostgreSQL databases, with Row-Level Security, embedded into the client's portal for secure access.",
    ],
  },
];

export { projectsData };
