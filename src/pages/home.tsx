import { Text } from '@/components/text';

import { Badge, Button } from '@/components';
import { NuxUILogo } from '@/logo';
import { useColorScheme } from '@/utils';
import { SafeAreaView, View } from 'react-native';

export function Home() {
    const { toggleColorScheme } = useColorScheme()

    return (
        <>
            <SafeAreaView className='flex-1 bg-white'>
                <View className='flex-1 justify-center items-center gap-3'>
                    <NuxUILogo />
                    <Badge className='mt-2'>
                        <Text>Introducing Nux UI for React Native</Text>
                    </Badge>
                    <Text className='text-[32px] text-center tracking-[-.5] leading-[32px] font-cereal'>Bring your React Native ideas to life with style</Text>
                    <Text className='text-center color-foreground text-sm'>A component library for React Native built with NativeWind — customizable, accessible, and ready to ship.</Text>
                    <View className='flex-row gap-2 justify-center'>
                        <Button variant={"secondary"} className='rounded-full'>
                            <Text className='text-xs'>View on Github</Text>
                        </Button>
                        <Button onPress={toggleColorScheme} className='rounded-full'>
                            <Text className='text-xs'>Get started</Text>
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
