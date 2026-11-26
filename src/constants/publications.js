// Shown in display order. Only the title is shown; it links to `url`.
const publicationsData = [
  {
    key: "16",
    title: "Email Data Migration from CRM to SQL Server using Azure Data Factory",
    url: "https://www.inkeysolutions.com/email-data-migration-from-crm-to-sql-server-using-azure-data-factory/",
  },
  {
    key: "23",
    title: "Understanding Semantic Models in Microsoft Fabric",
    url: "https://www.inkeysolutions.com/understanding-semantic-models-in-microsoft-fabric/",
  },
  {
    key: "24",
    title: "Understanding Refresh Options in Custom Semantic Models in Microsoft Fabric",
    url: "https://www.inkeysolutions.com/understanding-refresh-options-in-custom-semantic-models-in-microsoft-fabric/",
  },
  {
    key: "17",
    title: "Seamless Power BI Integration with SharePoint/OneDrive – No More Publish, No Paid License",
    url: "https://www.inkeysolutions.com/seamless-power-bi-integration-with-sharepoint-onedrive-no-more-publish-no-paid-license/",
  },
  {
    key: "15",
    title: "Solving Data Access Limitations in Power BI Using Service Principal and Cloud Connection",
    url: "https://www.inkeysolutions.com/solving-data-access-limitations-in-power-bi-using-service-principal-and-cloud-connection/",
  },
  {
    key: "26",
    title: "Drill Through from Power BI Table to Paginated Report",
    url: "https://www.inkeysolutions.com/drill-through-from-power-bi-table-to-paginated-report/",
  },
  {
    key: "10",
    title: "Power BI Web API Integration with Bearer Token & Refresh Configuration",
    url: "https://www.inkeysolutions.com/power-bi-web-api-integration-with-bearer-token-refresh-configuration/",
  },
  {
    key: "7",
    title:
      "Alternative of the traditional method of creating audiences in Power BI app workspaces",
    url: "https://www.inkeysolutions.com/dynamic-page-navigation-in-power-bi-based-as-per-user-role/",
  },
  {
    key: "21",
    title: "Parameter Binding with DirectQuery in Power BI",
    url: "https://www.inkeysolutions.com/parameter-binding-with-directquery-in-power-bi/",
  },
  {
    key: "11",
    title: "Dynamic Rating Sentences in Power BI",
    url: "https://www.inkeysolutions.com/dynamic-rating-sentences-in-power-bi/",
  },
  {
    key: "9",
    title: "Never Use an Outdated Report Again: Version Tracking in Power BI",
    url: "https://www.inkeysolutions.com/never-use-an-outdated-report-again-version-tracking-in-power-bi/",
  },
  {
    key: "13",
    title: "Alternative way of Navigation for Power BI’s Table Visuals Using Pagination",
    url: "https://www.inkeysolutions.com/alternative-way-of-navigation-for-power-bis-table-visuals-using-pagination/",
  },
  {
    key: "14",
    title: "Design Smarter Power BI Matrices with Conditional Formatting for Row and Column Totals",
    url: "https://www.inkeysolutions.com/design-smarter-power-bi-matrices-with-conditional-formatting-for-row-and-column-totals/",
  },
  {
    key: "12",
    title: "Turning a Matrix Visual into a Calendar View in Power BI",
    url: "https://www.inkeysolutions.com/turning-a-matrix-visual-into-a-calendar-view-in-power-bi/",
  },
  {
    key: "22",
    title: "Using Matrix as a Heat Map: Visualizing Planned vs Actual Stage Dates in Power BI as an Alternative to a Gantt Chart",
    url: "https://www.inkeysolutions.com/using-matrix-as-a-heat-map-visualizing-planned-vs-actual-stage-dates-in-power-bi-alternative-of-gantt-chart/",
  },
  {
    key: "27",
    title: "Revolutionizing DAX with the Magic of Visual Calculation in Power BI",
    url: "https://www.inkeysolutions.com/revolutionizing-dax-with-the-magic-of-visual-calculation-in-power-bi/",
  },
  {
    key: "18",
    title: "From De-normalized to Normalized: A Guide to Data Transformation with SSIS",
    url: "https://www.inkeysolutions.com/from-de-normalized-to-normalized-a-guide-to-data-transformation-with-ssis/",
  },
  {
    key: "19",
    title: "Streamlined Operations: Automated Extraction of Email Attachments with SSIS",
    url: "https://www.inkeysolutions.com/streamlined-operations-automated-extraction-of-email-attachments-with-ssis/",
  },
  {
    key: "25",
    title: "Auto-Select Current Month and Week in Power BI Slicers",
    url: "https://www.inkeysolutions.com/auto-select-current-month-and-week-in-power-bi-slicers/",
  },
  {
    key: "8",
    title: "Write Once, Reuse Everywhere: DAX UDFs in Power BI",
    url: "https://www.inkeysolutions.com/write-once-reuse-everywhere-dax-udfs-in-power-bi/",
  },
  {
    key: "20",
    title: "Explore \"This Data\" of the Semantic Model (on PBI Service)",
    url: "https://www.inkeysolutions.com/explore-this-data-of-the-semantic-model-on-pbi-service/",
  },
  {
    key: "6",
    title: "Delving into the Explore this data feature in PowerBI service",
    url: "https://www.inkeysolutions.com/introducing-explore-this-data-feature-in-powerbi-service/",
  },
  {
    key: "1",
    title:
      "Have you ever wanted your date hierarchy slicer to filter automatically based on another slicer selection?",
    url: "https://www.inkeysolutions.com/have-you-ever-wanted-your-date-hierarchy-slicer-to-filter-automatically-based-on-another-slicer-selection/",
  },
  {
    key: "2",
    title:
      "Have You Ever Thought of Creating a Slider or Rating Bar Using a Line Chart in Power BI?",
    url: "https://www.inkeysolutions.com/have-you-ever-thought-of-creating-a-slider-or-rating-bar-using-a-line-chart-in-power-bi/",
  },
  {
    key: "3",
    title: "Streamlining Monthly Data Reporting Through Email",
    url: "https://www.inkeysolutions.com/case-studies/streamlining-monthly-data-reporting-through-email/",
  },
  {
    key: "4",
    title:
      "Here’s how you can streamline the process of getting the data from an outlook attachment to PowerBI report!!!!",
    url: "https://www.inkeysolutions.com/microsoft-power-bi-consulting-how-to-get-the-data-from-the-outlook-attachment-and-load-it-to-the-power-bi-report/",
  },
  {
    key: "5",
    title: "Microsoft PowerBI consulting: Building Your Analytics Foundation",
    url: "https://www.inkeysolutions.com/microsoft-power-bi-consulting-building-your-analytics-foundation/",
  },
];

export { publicationsData };
