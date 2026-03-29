"use client"
import React from 'react'
import { Button } from '../ui/button';
import { ChevronDownIcon } from 'lucide-react';
import {
    ButtonGroup,
} from "@/components/ui/button-group"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ResumeTemplate, variantRegistry } from '@/components/pdf/variants/registry';
import { Switch } from '../ui/switch';

interface ManagerProps {
    theme: ResumeTemplate;
    onThemeChange: (theme: ResumeTemplate) => void;
    onDownloadImage: () => void;
    onDownloadPdf: () => void;
    isDownloading: boolean;
    currentResumeTheme: boolean;
    handleVercelThemeChange: (value: boolean) => void;
    handleViewPdf: () => void
}

const Manager: React.FC<ManagerProps> = ({ theme, onThemeChange, onDownloadImage, onDownloadPdf, isDownloading, handleVercelThemeChange, currentResumeTheme, handleViewPdf }) => {
    {/* Actions */ }
    return (
        < div className='bg-background flex items-center justify-between py-2 border-b border-x px-4' >
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Theme</span>
                <Select defaultValue={theme as string} onValueChange={(value) => onThemeChange(value as ResumeTemplate)}>
                    <SelectTrigger className="w-30 focus-visible:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {Object.entries(variantRegistry).map(([id, variant]) => (
                                <SelectItem key={id} value={id}>
                                    {variant.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    theme === "vercel" && (
                        <>
                            <span className="text-sm">Light Theme</span>
                            <Switch checked={!!currentResumeTheme} onCheckedChange={(value) => {
                                handleVercelThemeChange(value)
                            }}>
                            </Switch>
                            <span className="text-sm">Dark Theme</span>
                        </>
                    )}
            </div>
            <div className='flex gap-4 items-center '>

                <ButtonGroup>
                    <Button variant="outline" onClick={onDownloadPdf}>Download</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="pl-2!">
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="">

                            <DropdownMenuGroup>
                                <DropdownMenuItem onSelect={handleViewPdf} >
                                    View Pdf
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={onDownloadImage} disabled={isDownloading} className=''>
                                    {isDownloading ? 'Downloading...' : 'Download Image'}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ButtonGroup>

                {/* <Button
                    onClick={onDownloadImage}
                    disabled={isDownloading}
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Download className="w-4 h-4" />
                    {isDownloading ? 'Generating...' : 'Download'}
                </Button>
                <Button
                    onClick={() => onDownloadPdf()}
                    disabled={isDownloading}
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Printer className="w-4 h-4" />
                    {isDownloading ? 'Printing...' : 'Print'}
                </Button> */}
            </div>
        </div >
    )
}

export default Manager