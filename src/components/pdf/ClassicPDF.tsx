import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    borderBottom: '1 solid #d4d4d8',
    paddingBottom: 20,
    marginBottom: 25,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#171717',
  },
  headline: {
    fontSize: 14,
    marginBottom: 8,
    color: '#404040',
  },
  contactInfo: {
    fontSize: 10,
    color: '#525252',
    marginBottom: 4,
  },
  contactLinks: {
    fontSize: 10,
    color: '#1d4ed8',
    marginTop: 6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    borderBottom: '1 solid #525252',
    paddingBottom: 4,
    color: '#171717',
  },
  summaryText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#404040',
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#171717',
  },
  experienceDate: {
    fontSize: 10,
    color: '#525252',
  },
  experienceCompany: {
    fontSize: 10,
    color: '#404040',
    marginBottom: 8,
  },
  experienceDescription: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#404040',
  },
  projectItem: {
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#171717',
  },
  projectDescription: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 8,
    color: '#404040',
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  techTag: {
    fontSize: 8,
    backgroundColor: '#f5f5f4',
    padding: '4 8',
    borderRadius: 3,
    color: '#404040',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    fontSize: 10,
    backgroundColor: '#f5f5f4',
    padding: '6 12',
    borderRadius: 3,
    color: '#404040',
  },
  achievementItem: {
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#171717',
  },
  achievementDescription: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#404040',
  },
  certItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  certName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#171717',
  },
  certIssuer: {
    fontSize: 10,
    color: '#525252',
  },
  certDate: {
    fontSize: 10,
    color: '#525252',
  },
});

interface ClassicPDFProps {
  data: ResumeData;
}

export const ClassicPDF: React.FC<ClassicPDFProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personalInfo.fullName || 'Your Name'}</Text>
          {data.personalInfo.headline && (
            <Text style={styles.headline}>{data.personalInfo.headline}</Text>
          )}
          <View style={styles.contactInfo}>
            {data.social.email && <Text>{data.social.email}</Text>}
            {data.personalInfo.phone && <Text>{data.personalInfo.phone}</Text>}
            {data.personalInfo.location && <Text>{data.personalInfo.location}</Text>}
          </View>
          <View style={styles.contactLinks}>
            {data.social.website && <Text>{data.social.website}</Text>}
            {data.social.linkedin && <Text>LinkedIn: {data.social.linkedin}</Text>}
            {data.social.github && <Text>GitHub: {data.social.github}</Text>}
          </View>
        </View>

        {/* Summary */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{data.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.position}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>
                  {exp.company} • {exp.location}
                </Text>
                <Text style={styles.experienceDescription}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.name}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                {project.technologies.length > 0 && (
                  <View style={styles.techTags}>
                    {project.technologies.map((tech, idx) => (
                      <Text key={idx} style={styles.techTag}>{tech}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((skill, idx) => (
                <Text key={idx} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            {data.achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementItem}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Certificates */}
        {data.certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certificates.map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <View>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>{cert.issuer}</Text>
                </View>
                <Text style={styles.certDate}>{cert.date}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{edu.institution}</Text>
                  <Text style={styles.experienceDate}>
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>
                  {edu.degree} - {edu.field}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
