import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function CountrySelectionModal(){

    const [language, setLanguage] = useState("🇺🇸 en");
    const [currency, setCurrency] = useState("usd");

  return (
    <Popover>
    <PopoverTrigger>{`${language.toUpperCase()} / ${currency.toUpperCase()}`}</PopoverTrigger>
    <PopoverContent className="flex flex-col justify-center items-center">
      {/* Language Selection */}
      <div>
        <p className="text-sm mb-1 font-medium">Language</p>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="🇺🇸 en">🇺🇸 English</SelectItem>
            <SelectItem value="🇩🇪 de">🇩🇪 German</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Currency Selection */}
      <div>
        <p className="text-sm mb-1 font-medium">Currency</p>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </PopoverContent>
  </Popover>
  )
}