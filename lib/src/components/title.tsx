import { ReactNode } from "react";
import { Text } from "react-native";

export function Title({ children, size = 24 }: {
    children: ReactNode,
    size?: number
}) {
    return (
        <Text
            style={{ fontSize: size }}
            className="color-red-500">
            {children}
        </Text>
    )
}
