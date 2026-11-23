import powerBiDiagram from "../assets/power-bi-architecture.png";
import enterpriseDiagram from "../assets/enterprise-bi-architecture.jpeg";

export const projectsData = [
  {
    "title": "Power BI Reporting & Analytics Solution",
    "tech": [
      "Power BI",
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Data Warehousing",
      "Data Modeling",
      "Semantic Model",
      "Power Automate",
      "Incremental Refresh",
      "Partition Management",
      "Row-Level Security (RLS)",
      "Power BI Embedded",
      "REST API",
      "ETL / Data Transformation"
    ],
    "overview": "Developed a centralized Power BI analytics solution consisting of 22 interactive reports built on a single, reusable semantic model. The solution integrates multiple data sources, implements SQL-based business transformations, automates incremental and historical partition refreshes, and delivers secure, user-specific analytics through an embedded business portal.",
    "architecture": [
      {
        "title": "Data Integration & Transformation",
        "body": "Data is extracted from Excel, SQL Server, and REST APIs using C# code developed by the client's development team. SQL Server Stored Procedures handle data cleaning, joins, calculations, and business transformations. The processed data is stored in a centralized SQL Server Data Warehouse."
      },
      {
        "title": "Data Modeling & Reporting",
        "body": "Designed a shared Power BI Semantic Model using Data Warehouse reporting tables, enabling consistent business logic and reusable measures across 22 Power BI reports. This centralized approach simplifies maintenance and ensures reporting consistency."
      },
      {
        "title": "Automated Incremental Refresh & Partition Management",
        "body": "Implemented two Power Automate-based refresh workflows:",
        "details": [
          [
            "Regular Refresh",
            "Refreshes the latest data through the incremental refresh process."
          ],
          [
            "Historical Partition Refresh",
            "SQL Stored Procedures identify historical partitions affected by data changes. Power Automate loops through the identified partitions and triggers selective refreshes, reducing unnecessary processing."
          ]
        ]
      },
      {
        "title": "Embedded Analytics & Data Security",
        "body": "Integrated 22 Power BI reports into a business portal, enabling centralized report access. Implemented Row-Level Security (RLS) using the logged-in user's PIN to restrict data visibility and ensure users only access authorized information."
      }
    ],
    "highlights": [
      "22 Power BI reports powered by a centralized, reusable semantic model.",
      "Automated incremental refresh using Power Automate.",
      "Change-driven historical partition refresh using SQL Stored Procedures and Power Automate.",
      "PIN-based Dynamic Row-Level Security for user-specific data access.",
      "Embedded Power BI analytics within a business portal.",
      "Centralized SQL Server Data Warehouse with reusable transformation logic."
    ],
    "diagram": powerBiDiagram,
    "diagramAlt": "Power BI solution architecture showing source integration, SQL Server, embedded reports, refresh, and row-level security."
  },
  {
    "title": "Enterprise Data & BI Architecture",
    "diagram": enterpriseDiagram,
    "diagramAlt": "Architecture diagram showing REST API, Excel, and Snowflake data flowing through Microsoft Fabric and a data warehouse into embedded Power BI reports."
  }
];
