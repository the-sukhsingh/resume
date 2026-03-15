"use client"
import React from 'react'
import { Button } from '../ui/button';
import { ChevronDownIcon, Download, Image, Printer } from 'lucide-react';
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

interface ManagerProps {
    theme: "classic" | "designer" | "vercel";
    onThemeChange: (theme: "classic" | "designer" | "vercel") => void;
    onDownloadImage: () => void;
    onDownloadPdf: () => void;
    isDownloading: boolean;
}

const Manager: React.FC<ManagerProps> = ({ theme, onThemeChange, onDownloadImage, onDownloadPdf, isDownloading }) => {
    {/* Actions */ }
    return (
        < div className='bg-background flex items-center justify-between py-2 border-b border-x px-4' >
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Theme</span>
                <Select defaultValue={theme} onValueChange={(value) => onThemeChange(value as "classic" | "designer" | "vercel")}> 
                    <SelectTrigger className="w-30 focus-visible:ring-0">
                        <SelectValue  />
                    </SelectTrigger>
                    <SelectContent className=''>
                        <SelectGroup>
                            <SelectItem value="designer">Designer</SelectItem>
                            {/* <SelectItem value="classic">Classic</SelectItem> */}
                            <SelectItem value="vercel">Vercel</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex gap-4 items-center '>

                <ButtonGroup>
                    <Button variant="outline" onClick={onDownloadPdf}>Download</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="pl-2!">
                                <ChevronDownIcon/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="">
                            
                            <DropdownMenuGroup>
                                <DropdownMenuItem onSelect={onDownloadImage} disabled={isDownloading} className=''>
                                    {/* <Image className="w-4 h-4 mr-2" /> */}
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