import { H1, P } from "@/components";
import { Components as ComponentsIcon } from "@/icons/components";
import { ChevronRight, Search } from "lucide-react-native";
import { useMemo, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const componentCategories: Record<string, string[]> = {
    "Form & Input": [
        "button", "input", "textarea", "checkbox", "radio-group",
        "select", "switch", "toggle", "toggle-group", "form"
    ],
    "Layout": [
        "card", "container", "separator", "aspect-ratio", "tabs",
        "accordion", "bottom-tab-bar"
    ],
    "Navigation": [
        "navigation-menu", "menubar", "dropdown-menu", "context-menu"
    ],
    "Feedback": [
        "alert", "alert-dialog", "dialog", "tooltip", "hover-card",
        "popover", "progress", "skeleton"
    ],
    "Data Display": [
        "avatar", "badge", "table", "data-table", "typography", "text"
    ],
    "Utility": [
        "edit-screen-info", "screen-content", "label"
    ]
};

const allComponents = Object.values(componentCategories).flat();

export function Components() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredComponents = useMemo(() => {
        let components = selectedCategory
            ? componentCategories[selectedCategory] || []
            : allComponents;

        if (searchQuery) {
            components = components.filter((component: any) =>
                component.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return components;
    }, [searchQuery, selectedCategory]);

    const categories = Object.keys(componentCategories);

    const renderCategoryFilter = () => (
        <View>
            <FlatList
                data={[{ key: "all", label: "All" }, ...categories.map(cat => ({ key: cat, label: cat }))]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 4 }}
                ItemSeparatorComponent={() => <View className="w-2" />}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => setSelectedCategory(item.key === "all" ? null : item.key)}
                        className={`px-4 py-2 rounded-full border ${(item.key === "all" && !selectedCategory) || selectedCategory === item.key
                            ? "bg-primary border-primary"
                            : "bg-white border-border"
                            }`}
                    >
                        <P className={`text-sm font-medium ${(item.key === "all" && !selectedCategory) || selectedCategory === item.key
                            ? "text-white"
                            : "text-foreground"
                            }`}>
                            {item.label}
                        </P>
                    </TouchableOpacity>
                )}
            />
        </View>
    );

    const renderComponentItem = ({ item, index }: { item: string; index: number }) => (
        <TouchableOpacity
            className="bg-white rounded-2xl border border-border p-5 shadow-sm"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 2,
            }}
            activeOpacity={0.7}
        >
            <View className="flex-row items-center justify-between">
                <View className="flex-1">
                    <P className="text-lg font-semibold text-foreground capitalize mb-1">
                        {item.replace(/-/g, " ")}
                    </P>
                    <P className="text-sm text-muted-foreground">
                        {getComponentDescription(item)}
                    </P>
                </View>
                <View className="ml-3">
                    <View className="w-8 h-8 rounded-full bg-secondary items-center justify-center">
                        <ChevronRight size={16} className="text-muted-foreground" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <SafeAreaView className="flex-1 bg-white pt-10">
                <View className="flex-1">
                    {/* Header */}
                    <View className="px-6 pt-4 pb-6 bg-white border-b border-border">
                        <View className="flex-row items-center gap-3 mb-3">
                            <View className="w-10 h-10 rounded-2xl bg-primary/10 items-center justify-center">
                                <ComponentsIcon size={24} className="text-primary" />
                            </View>
                            <View className="flex-1">
                                <H1 className="text-3xl font-bold tracking-tight text-foreground">
                                    Components
                                </H1>
                            </View>
                        </View>
                        <P className="text-base text-muted-foreground leading-relaxed">
                            Discover and explore our comprehensive component library.
                            {filteredComponents.length} components available.
                        </P>
                    </View>

                    {/* Search Bar */}
                    <View className="px-6 py-4 bg-white">
                        <View className="flex-row items-center bg-gray-50 rounded-full px-4 ios:py-3 border border-border">
                            <Search size={20} className="text-muted-foreground m2-3" />
                            <TextInput
                                placeholder="Search components..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                className="flex-1 text-base text-foreground"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                    </View>

                    {/* Category Filters */}
                    <View className="px-6 bg-white pb-4">
                        {renderCategoryFilter()}
                    </View>

                    {/* Components List */}
                    <View className="flex-1 px-6 bg-gray-50">
                        {filteredComponents.length > 0 ? (
                            <FlatList
                                data={filteredComponents}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingBottom: 100,
                                    paddingTop: 8
                                }}
                                ItemSeparatorComponent={() => <View className="h-3" />}
                                renderItem={renderComponentItem}
                                keyExtractor={(item, index) => `${item}-${index}`}
                            />
                        ) : (
                            <View className="flex-1 items-center justify-center py-20">
                                <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4">
                                    <Search size={24} className="text-gray-400" />
                                </View>
                                <P className="text-lg font-medium text-foreground mb-2">
                                    No components found
                                </P>
                                <P className="text-muted-foreground text-center px-8">
                                    Try adjusting your search or filter criteria
                                </P>
                            </View>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

// Helper function to get component descriptions
function getComponentDescription(componentName: string): string {
    const descriptions: Record<string, string> = {
        "accordion": "Collapsible content sections",
        "alert-dialog": "Modal dialog for important messages",
        "alert": "Contextual feedback messages",
        "aspect-ratio": "Maintain consistent aspect ratios",
        "avatar": "User profile pictures and initials",
        "badge": "Small status indicators",
        "bottom-tab-bar": "Navigation tabs at bottom",
        "button": "Interactive action triggers",
        "card": "Flexible content containers",
        "checkbox": "Binary selection inputs",
        "container": "Layout wrapper components",
        "context-menu": "Right-click action menus",
        "data-table": "Structured data display",
        "dialog": "Modal overlay windows",
        "dropdown-menu": "Expandable option lists",
        "form": "Input collection and validation",
        "hover-card": "Content preview on hover",
        "input": "Text and data entry fields",
        "label": "Form field descriptions",
        "menubar": "Horizontal navigation menus",
        "navigation-menu": "Site navigation components",
        "popover": "Floating content panels",
        "progress": "Task completion indicators",
        "radio-group": "Single selection from options",
        "select": "Dropdown selection inputs",
        "separator": "Visual content dividers",
        "skeleton": "Loading state placeholders",
        "switch": "Toggle on/off controls",
        "table": "Tabular data presentation",
        "tabs": "Content section switchers",
        "text": "Typography and text display",
        "textarea": "Multi-line text inputs",
        "toggle-group": "Multiple toggle controls",
        "toggle": "Binary state switches",
        "tooltip": "Contextual help text",
        "typography": "Text styling components"
    };

    return descriptions[componentName] || "Component description";
}