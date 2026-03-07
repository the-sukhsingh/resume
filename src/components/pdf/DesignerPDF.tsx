import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

// Register fonts if needed
// Font.register({ family: 'Roboto', src: 'path/to/font.ttf' });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#e8e4d8',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
  },
  name: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  mainGrid: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  column: {
    flex: 1,
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  photoBox: {
    width: 120,
    height: 120,
    backgroundColor: '#d1d5db',
    alignSelf: 'center',
  },
  contactSection: {
    fontSize: 9,
  },
  contactLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  experienceGrid: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  experienceItem: {
    flex: 1,
    fontSize: 9,
  },
  experienceTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
    marginBottom: 4,
  },
  experiencePosition: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  experienceDescription: {
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  bottomGrid: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  skillsList: {
    fontSize: 10,
    lineHeight: 1.8,
  },
  educationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    marginBottom: 12,
  },
  educationInstitution: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  achievementItem: {
    fontSize: 9,
    marginBottom: 10,
  },
  achievementTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
    marginBottom: 4,
  },
});

interface DesignerPDFProps {
  data: ResumeData;
}

export const DesignerPDF: React.FC<DesignerPDFProps> = ({ data }) => {
  const {
    personalInfo,
    summary,
    social,
    experience,
    projects,
    achievements,
    skills,
    certificates,
    education,
    languages,
  } = data;

  const url = social.website ? new URL(social.website).hostname : 'www.example.com';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName || 'Morgan Maxwell'}</Text>
          <View style={styles.headerRow}>
            <Text>{personalInfo.headline || 'Headline Here'}</Text>
            <Text>{url}</Text>
          </View>
        </View>

        {/* Main Grid */}
        <View style={styles.mainGrid}>
          {/* Summary */}
          <View style={styles.column}>
            <Text style={styles.summaryText}>
              {summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Text>
          </View>

          {/* Photo Placeholder */}
          <View style={styles.column}>
            <View style={styles.photoBox} />
          </View>

          {/* Contact */}
          <View style={styles.column}>
            <View style={styles.contactSection}>
              <Text style={styles.contactLabel}>LINKEDIN</Text>
              <Text>{social?.linkedin?.split('.com/')[1] || 'linkedin/...'}</Text>
              
              <Text style={styles.contactLabel}>EMAIL</Text>
              <Text>{social.email || 'you@mail.com'}</Text>
              
              <Text style={styles.contactLabel}>PHONE</Text>
              <Text>{personalInfo.phone || '+123-456-7890'}</Text>
              
              <Text style={styles.contactLabel}>ADDRESS</Text>
              <Text>{personalInfo.location || '123 ANYWHERE ST.'}, {personalInfo.country || 'Canada'}</Text>
            </View>
          </View>
        </View>

        {/* Experience */}
        {experience.length > 0 && (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
            <View style={styles.experienceGrid}>
              {experience.slice(0, 3).map((exp) => (
                <View key={exp.id} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>
                    {exp.company} | {exp.startDate}-{exp.current ? 'Present' : exp.endDate}
                  </Text>
                  <Text style={styles.experiencePosition}>{exp.position}</Text>
                  <Text style={styles.experienceDescription}>
                    {exp.description || 'Lorem ipsum dolor sit amet.'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            <View style={styles.experienceGrid}>
              {projects.slice(0, 3).map((proj) => (
                <View key={proj.id} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{proj.name}</Text>
                  <Text style={styles.experiencePosition}>{proj.technologies.join(' ')}</Text>
                  <Text style={styles.experienceDescription}>
                    {proj.description || 'Lorem ipsum dolor sit amet.'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Bottom Grid */}
        <View style={styles.bottomGrid}>
          {/* Languages */}
          {languages.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>LANGUAGES</Text>
              {languages.slice(0, 4).map((lang, idx) => (
                <Text key={idx} style={styles.skillsList}>{lang}</Text>
              ))}
            </View>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {skills.slice(0, 5).map((skill, idx) => (
                <Text key={idx} style={styles.skillsList}>• {skill}</Text>
              ))}
            </View>
          )}

          {/* Education */}
          {education.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {education.slice(0, 2).map((edu) => (
                <View key={edu.id} style={styles.educationItem}>
                  <View>
                    <Text style={styles.educationInstitution}>{edu.institution}</Text>
                    <Text>({edu.degree} - {edu.field})</Text>
                  </View>
                  <Text style={{ fontWeight: 'bold' }}>
                    {edu.startDate}-{edu.current ? 'Present' : edu.endDate}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Achievements and Certificates */}
        <View style={styles.bottomGrid}>
          {achievements.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
              {achievements.slice(0, 2).map((achievement) => (
                <View key={achievement.id} style={styles.achievementItem}>
                  <Text style={styles.achievementTitle}>{achievement.title}</Text>
                  <Text>{achievement.description}</Text>
                </View>
              ))}
            </View>
          )}

          {certificates.length > 0 && (
            <View style={{ flex: 2 }}>
              <Text style={styles.sectionTitle}>CERTIFICATES</Text>
              <View style={styles.experienceGrid}>
                {certificates.slice(0, 3).map((cert) => (
                  <View key={cert.id} style={styles.experienceItem}>
                    <Text style={styles.experienceTitle}>{cert.name}</Text>
                    <Text style={styles.experiencePosition}>{cert.date}</Text>
                    <Text>{cert.issuer || 'Lorem ipsum dolor sit amet.'}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
