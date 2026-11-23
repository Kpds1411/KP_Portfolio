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
    "diagramAlt": "Architecture diagram showing REST API, Excel, and Snowflake data flowing through Microsoft Fabric and a data warehouse into embedded Power BI reports.",
    "subtitle": "API / Snowflake to Power BI | Historization, RLS & Client Portal",
    "tech": [
      "Microsoft Fabric",
      "Fabric Notebooks",
      "SQL Stored Procedures",
      "REST API (JSON)",
      "Excel (.xlsx)",
      "Snowflake",
      "ETL Orchestration",
      "Data Parsing & Transformation",
      "Staging Tables",
      "Data Warehousing",
      "SQL MERGE / Upsert",
      "Data Historization",
      "Soft Deletes",
      "Audit Columns",
      "Power BI",
      "Semantic Modeling",
      "Embedded Analytics",
      "Row-Level Security (RLS)",
      "User Principal Name (UPN)"
    ],
    "overview": "Built an enterprise data and business intelligence solution that consolidates REST API, Excel, and Snowflake data into curated warehouse tables for Power BI reporting. Microsoft Fabric orchestrates ingestion and SQL-based processing, while merge logic maintains current and historical records. Business reports share a Power BI semantic model and are embedded in a client portal with user-specific access controlled through RLS.",
    "architecture": [
      {
        "title": "Data Sources & Raw Ingestion",
        "body": "Data originates from REST APIs returning JSON, Excel (.xlsx) files, and Snowflake (a source refreshed daily through truncate-and-load). Microsoft Fabric notebooks and stored procedures extract the data, call APIs, read files, and load raw responses into a raw response table. Run IDs and load timestamps support traceability."
      },
      {
        "title": "Parsing & Business Transformation",
        "body": "SQL stored procedures parse JSON into tabular structures, cleanse and standardize incoming records, apply business rules, and load transformed datasets into staging (STG) tables."
      },
      {
        "title": "Merge, Historization & Data Warehouse",
        "body": "A merge stored procedure identifies new and changed records and performs INSERT/UPDATE upserts into enterprise warehouse tables. The process handles deleted records through an IsDeleted soft-delete flag, retains historical as well as current data, and maintains audit columns such as load and update dates."
      },
      {
        "title": "Semantic Model, Reports & Client Portal",
        "body": "Power BI connects to the curated warehouse tables through a shared semantic model supporting multiple business reports, including operational, performance, and trend analysis. Reports are embedded in a client portal to provide a centralized, branded reporting experience."
      },
      {
        "title": "Security & Access Control",
        "body": "Power BI Row-Level Security (RLS) uses the user's User Principal Name (UPN) to restrict report data to the records they are authorized to view."
      },
      {
        "title": "Orchestration & Refresh Strategy",
        "body": "Microsoft Fabric orchestrates the extraction, raw loading, parsing, staging, and merge/upsert workflow. ETL runs daily using incremental or change-driven processing to handle new, updated, and deleted records while preserving historical data. Power BI reports use a separate scheduled daily full refresh, rather than incremental report refresh, to read the latest warehouse data."
      }
    ],
    "highlights": [
      "Unified API, Excel, and Snowflake ingestion through Microsoft Fabric.",
      "Traceable raw data loading with run IDs and timestamps.",
      "Reusable SQL stored procedures for parsing, cleansing, business logic, and staging.",
      "Change-driven warehouse merges with upsert, soft-delete, and historization logic.",
      "Curated current and historical warehouse tables with audit fields.",
      "Shared Power BI semantic model serving multiple reports.",
      "Embedded client-portal analytics with UPN-based RLS.",
      "Daily incremental/change-driven ETL and separate daily full Power BI refresh."
    ]
  }
];
