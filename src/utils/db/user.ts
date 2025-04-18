import type {User} from "@supabase/auth-js/src/lib/types";
import { prisma } from '@/utils/prisma/client'
import {generateUniqueSlug} from "@/utils/slug";


export const userSignUp = async (user: User)=> {
    const profile = await getProfile(user);

    if (!profile) {
        let slug = "";
        const baseName = user.user_metadata.full_name;

        // Keep generating slug until it's unique
        while (true) {
            slug = generateUniqueSlug(baseName);
            const existing = await prisma.userProfile.findUnique({
                where: { slug },
            });

            if (!existing) break; // It's unique!
        }
        await prisma.userProfile.create({
            data: {
                id: user.id,
                slug: slug,
                wishlists: {
                    create: [
                        {
                            name: "Favorite",
                            slug: ""
                        }
                    ]
                }
            },
        });
    }
}

export const getProfile = async (user: User)=> {
    return prisma.userProfile.findUnique({
        where: {
            id: user.id
        },
    });
}

