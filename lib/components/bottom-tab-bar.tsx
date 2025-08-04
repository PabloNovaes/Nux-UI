import { Components } from "@/icons/components";
import { Home } from "@/icons/home";
import { cn } from "@/utils";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
    Heart,
    House,
    Search,
    Settings,
    ShoppingBag,
    User
} from "lucide-react-native";
import { useEffect, useRef } from "react";
import { Animated, Pressable, View } from "react-native";
type IconProps = {
    name: string;
    size?: number;
    stroke?: number;
    color?: string;
}

const Icon = ({ name, size = 24, stroke = 1.5, color = "#666" }: IconProps) => {
    const iconProps = { size, strokeWidth: stroke, color };

    switch (name) {
        case "Home": return <Home {...iconProps} />;
        case "Components": return <Components {...iconProps} />;
        case "Search": return <Search {...iconProps} />;
        case "Profile": return <User {...iconProps} />;
        case "Settings": return <Settings {...iconProps} />;
        case "Favorites": return <Heart {...iconProps} />;
        case "Shop": return <ShoppingBag {...iconProps} />;
        default: return <House {...iconProps} />;
    }
};

export function BottomTabBar({ state: { routes, index }, navigation }: BottomTabBarProps) {
    const fadeAnims = useRef(
        routes.map(() => new Animated.Value(0.6))
    ).current;

    useEffect(() => {
        fadeAnims.forEach((anim, i) => {
            Animated.timing(anim, {
                toValue: i === index ? 1 : 0.6,
                duration: 200,
                useNativeDriver: true,
            }).start();
        });
    }, [index]);

    return (
        <View className="flex-row  self-center bg-[#202020] rounded-full gap-2 shadow-lg border border-gray-100 absolute bottom-5 mx-5 justify-center p-3">
            {routes.map((route, routeIndex) => {
                const isActive = routeIndex === index;
                const fadeAnim = fadeAnims[routeIndex];

                return (
                    <Animated.View
                        key={route.name}
                        className={cn("rounded-full", isActive && "bg-white")}
                        style={{ opacity: fadeAnim }}>
                        <Pressable className="size-10 items-center justify-center rounded-full"
                            onPress={() => navigation.navigate(route.name)}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.7 : 1,
                            })}
                        >
                            <Icon
                                name={route.name}
                                size={20}
                                stroke={1.8}
                                color={isActive ? "#202020" : "#6b7280"}
                            />
                        </Pressable>
                    </Animated.View>
                );
            })}
        </View>

    );
}