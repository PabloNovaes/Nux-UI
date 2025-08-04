import { Text, View } from "react-native"
import { cn } from "./utils"

interface NuxUILogoProps {
    size?: number
}

export function NuxUILogo({ size = 40 }: NuxUILogoProps) {
    return (
        <View className="flex flex-row items-center gap-1">
            <View className={`text-[${size}] font-cereal-bold tracking-tight flex-row`}>
                <Text className={cn("text-[#252525] font-cereal-medium tracking-[-2]", `text-4xl`)}>
                    Nux
                </Text>
                <Text className={cn("ml-1 text-gray-400 font-cereal tracking-[-2]", `text-4xl`)}>
                    UI
                </Text>
            </View>
        </View>
    )
}
