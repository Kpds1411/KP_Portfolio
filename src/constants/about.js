const aboutContent = {
  description: `As a Senior Data Analytics Engineer at Inkey IT Solutions Pvt. Ltd., Keyur specializes in unlocking the potential of data for business growth. He leverages advanced analytics and visualization techniques to empower organizations with actionable insights. Keyur has good knowledge and experience in working with ETL technologies like Microsoft Fabric, ADF and SSIS, as well as version control systems like GitHub and Azure DevOps. He has also conducted informative sessions on these topics in his organization. He is well-versed in Fabric, a low-code development platform that enables rapid application development. He has written several technical blogs and contributed to the open-source community of Power BI and Fabric. Keyur is passionate about harnessing the power of data and learning new technologies.`,
  additionalInfo: [
    { label: "Profile", value: "Data Analytics" },
    {
      label: "Domain",
      value:
        "Retail, E-Commerce, Trading, Logistics, Finance, Automobile, Health Care, Oil & Gas, Manufacturing, Inventory Procurement",
    },
    {
      label: "Technical Skills",
      value:
        "Excel, SQL, Power BI, SQL Server Integration Service (SSIS), Azure Data Factory (ADF), Microsoft Fabric, Power Automate",
    },
    {
      label: "Project Management",
      value: "Azure DevOps, Jira, Asana, Trello",
    },
    {
      label: "Business Skills",
      value:
        "Client Communication, Stakeholder Management, Time and Task Management, Team Management, Project Management, Cross-functional Collaboration, Mentoring & Training team members",
    },
    {
      label: "Education",
      value: "Bachelor of Engineering-Information Technology",
    },
    { label: "Languages", value: "English, Hindi, Gujarati" },
    {
      label: "Interest",
      value:
        "Traveling, Content Creation, Passionate about latest tech updates and gadgets, Expert in exploring food cuisines, Mad at cricket and bikes",
    },
  ],
};

const projectsCompleted = 15;

const linkedinUrl =
  "https://www.linkedin.com/in/keyurpatel1761?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRDzQJXKLT7WAA%2BFqW15eKw%3D%3D";

import resume from "../assets/KeyurPatel_CV.docx?url";

const cvUrl = resume;

const buttonsData = [
  {
    key: "1",
    buttonText: "LinkedIn",
    url: linkedinUrl,
    download: false,
  },
  {
    key: "2",
    buttonText: "Download CV",
    url: cvUrl,
    download: "KeyurPatel_CV.docx",
  },
];

export {
  aboutContent,
  projectsCompleted,
  linkedinUrl,
  resume,
  buttonsData,
};
