import { Skills } from "./skills"

export const resumeContent = {
    summary: 'Experienced software engineer fluent in code and product development.',
    experience: [
        {
            companyName: 'Passport Labs',
            title: 'Software Engineer II',
            startDate: new Date('6/1/2019'), 
            endDate: new Date('12/18/2020'), 
            description: [
                'Assist in the design and development of parking enforcement software',
                'Write client-side code using React with Redux state management',
                'Write microservices in Node.js which were deployed using AWS Lambda',
                'Use a number of Unit Test frameworks to write tests and improve code coverage',
                'Work with the designers and business analysts to establish business requirements',
                'Document code functionality for external APIs',
                'Developed personalized KPIs to work towards personal and career growth',
                'Guided junior developers to aid their own growth',
            ],
            skills: [
                Skills.javascript, Skills.react, Skills.node, Skills.lambda, Skills.jsx, Skills.json, Skills.gitLab, Skills.html, 
                Skills.css, Skills.intelliJ, Skills.vSCode, Skills.jasmine, Skills.jest, Skills.git, Skills.agile, Skills.tdd, Skills.json, 
                Skills.mac, Skills.lodash, Skills.redux, Skills.styled, Skills.npm
            ]
        },
        {
            companyName: 'Bank of America',
            title: 'Application Programmer V',
            startDate: new Date('4/1/2017'), 
            endDate: new Date('6/1/2019'), 
            description: [
                'Assist in completing and polishing a web page inventory management system',
                'Assist in the development to convert the WIMS application from the existing SQL Server database to a new Oracle database.',
                'Convert existing store procedures to working Java code using JPA/Hibernate',
                'Work with the business to establish business requirements',
                'Write up use cases to document desired functionality',
                'Help to improve various SDLC practices to move towards a more Agile environment',
            ],
            skills: [
                Skills.java, Skills.spring, Skills.entity, Skills.hibernate, Skills.jpa, Skills.git,Skills.oracle, Skills.mySql, 
                Skills.angular, Skills.subversion, Skills.sql, Skills.html, Skills.json, Skills.javascript, Skills.css, Skills.intelliJ, 
                Skills.windows, Skills.perforce, Skills.agile, Skills.tfs, Skills.jQuery, Skills.maven, Skills.jira, Skills.npm
            ]
        },
        {
            companyName: 'Verian Technologies (A Basware Company)',
            title: 'Software Engineer I',
            startDate: new Date('4/1/2016'), 
            endDate: new Date('11/2/2016'), 
            description: [
                'Assist in the development of an Invoicing module of a Purchase-to-Pay product',
                'Further enhance skills with Java, Spring, and JPA',
                'Write code for both the Client and Server sides of the application',
                'Use a number of Unit Test frameworks to write and improve code coverage',
                'Work in an Agile environment',
                'Offer numerous creative ideas to improve the product',
                'Continually improve development skills through Pluralsight and Coursera courses',
            ],
            skills: [
                Skills.java, Skills.spring, Skills.entity, Skills.hibernate, Skills.jpa, Skills.angular, Skills.v1, Skills.javascript, 
                Skills.mySql, Skills.html, Skills.json, Skills.sql, Skills.css, Skills.intelliJ, Skills.windows, Skills.jenkins, 
                Skills.jUnit, Skills.agile, Skills.jQuery, Skills.underscore, Skills.jenkins, Skills.gradle, 
            ]
        }, 
        {
            companyName: 'Camstar (A Siemens Company)',
            title: 'Application Developer',
            startDate: new Date('3/1/2015'), 
            endDate: new Date('3/1/2016'), 
            description: [
                'Assist in the development of the front end to a prototype MES Big Data application',
                'Use a custom framework to add and maintain features in the cloud-based UI',
                'Update and maintain graphs and charts using D3js',
                'Further developed skills with front end technologies (JavaScript, HTML, CSS, etc.)',
                'Work development tickets ranging from defects to enhancements and new features',
                'Continually improve development skills by working through Pluralsight courses',
            ],
            skills: [
                Skills.cSharp, Skills.angular, Skills.v1, Skills.javascript, Skills.sqlServer, Skills.html, Skills.json, Skills.sql,
                Skills.css, Skills.visualStudio, Skills.windows, Skills.agile, Skills.subversion, Skills.d3, Skills.jQuery, Skills.jira
            ]
        }, 
        {
            companyName: 'American Tire Distributors',
            title: 'Junior Programmer Analyst',
            startDate: new Date('6/1/2013'), 
            endDate: new Date('3/1/2015'), 
            description: [
                'Assist in the development of a B2B eCommerce web application',
                'Analyze and interpret business requirements and technical documentation',
                'Use the hybris eCommerce platform and Spring MVC, among many other technologies',
                'Use hybris to create dynamic web pages including marketing and advertising content', 
                'Extend hybris source code to customize the platform to fit our needs', 
                'Use the native database import/export (impex) functionality to update the database',
            ],
            skills: [
                Skills.java, Skills.spring, Skills.backbone, Skills.jira, Skills.javascript, Skills.jQuery, Skills.underscore, Skills.mySql, Skills.html,
                Skills.json, Skills.sql, Skills.css, Skills.intelliJ, Skills.eclipse, Skills.linux, Skills.jenkins, Skills.jUnit, Skills.agile, Skills.hybris,
                Skills.jenkins, Skills.ant, Skills.tomcat,
            ]
        }
    ],
    education: [
        {
            name: 'Elon University', 
            location: 'Elon, NC', 
            degrees: [
                {name: 'Bachelor of Fine Arts', subject: 'Music Theatre',  graduationDate: new Date('5/23/2009')},
                {name: 'Bachelor of Science', subject: 'Computer Science (12 Credits)'},
            ]
        },
        {
            name: 'Regis University', 
            location: 'Denver, CO', 
            degrees: [
                {name: 'Masters Certificate', subject:'Software Engineering'}
            ]
        }
    ],
    codeExamples: [
        {
            name: 'Objective Home', 
            link: 'https://github.com/phowland1/Objective', 
            description: `You are currently looking at the deployed result of this personal project.`,
            lastUpdated: new Date('11/5/2022'),
            skills: [
                Skills.javascript,
                Skills.css,
                Skills.styled,
                Skills.react,
                Skills.jsx,
                Skills.npm,
            ]
        },
        {
            name: 'Project Maple', 
            link: 'https://github.com/phowland1/project-maple-v2/tree/master/public', 
            description: `A coding challenge to create a "Tree" diagram that would support multiple concurrent sessions 
                            and update changes to each session in real time`,
            lastUpdated: new Date('5/2/2019'),
            skills: [
                Skills.javascript,
                Skills.angular,
                Skills.lodash,
                Skills.html,
                Skills.css,
                Skills.rds
            ]
        },
        {
            name: 'Character Sheet', 
            link: 'https://github.com/phowland1/CharacterSheet', 
            description: `This personal project was to create a character sheet app for D&D 5th Edition. 
                            Intended to experiment and familiarize myself with Spring, JPA, and the Entity Framework`,
            lastUpdated: new Date('10/19/2014'),
            skills: [
                Skills.java, 
                Skills.javascript, 
                Skills.spring, 
                Skills.jpa, 
                Skills.jsp, 
                Skills.html, 
                Skills.backbone, 
                Skills.mySql, 
                Skills.jQuery, 
                Skills.hibernate, 
                Skills.entity, 
                Skills.underscore,
                Skills.html,
                Skills.css
            ]
        },

    ]
}

