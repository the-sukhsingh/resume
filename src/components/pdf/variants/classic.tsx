"use client"
import React from 'react'
import { Document, Page, Text as TextR, View as ViewR, Image, Font, Link, Svg, Polyline, Line } from "@react-pdf/renderer";
import { ResumeData } from '@/types/resume';
import { cn } from '@/lib/utils';
import { createTw } from "react-pdf-tailwind";



const tw = createTw({
  theme: {
    fontFamily: {
      //  Font Family Here
    },
    extend: {
      colors: {
        background: "#040404",
        borderColor: "#262626",
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
    },
  },
});

const ClassicPdf: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <Document
      title={`Resume-${data.personalInfo.fullName}`}
      author={data.personalInfo.fullName || "Unknown"}
      creator={data.personalInfo.fullName || "Unknown"}
      producer="Resumely"
    >
      <Page size="A4" style={tw(cn("font-default"))}>
        <View>
          <Text>Hello</Text>
        </View>
      </Page>
    </Document>

  )
}


const View = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <ViewR style={tw(cn("flex flex-col", className))}>
        {children}
    </ViewR>
)

const Text = ({ children, className, font }: { children: React.ReactNode, className?: string, font?: string }) => (
    <TextR style={[tw(cn("text-sm text-neutral-800", className)),
    {
        fontFamily: font,
    }
    ]}>
        {children}
    </TextR>
);

const Heading = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <TextR style={[tw(cn("text-sm uppercase text-neutral-900 tracking-wider mb-2", className)),
    {
        letterSpacing: "0.05rem",
    }
    ]}>
        {children}
    </TextR>
);

export default ClassicPdf