import { NextResponse } from "next/server";

interface Person {
    name: string;
    avatar: string;
    title: string;
    target: string;
    timer: number;
}

export async function GET(req: Request) {
    const response: Person[] = [
        {
            "name": "Толгоев Алишер",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC_2UAdzHGR-mN6O2483iwxwHaH5RcJJK4kDMCuIq7RdEXpk91um4gmV3rIg6tJ36bIc&usqp=CAU",
            "title": "Моя страсть — в создании уникальных, практичных интерфейсов. Повышаю эффективность проектов через инновации, улучшая стандарты пользовательского опыта.",
            "target": "Я верю, что хороший дизайн и качественная функциональность идут рука об руку. Я стараюсь создавать интерфейсы, которые удовлетворяют потребности пользователей и выделяются на фоне конкурентов. Я считаю, что детали имеют значение, и в каждом проекте я стремлюсь к максимальной точности и продуманности.",
            "timer": 180000
        },
        {
            "name": "Толгоев Алишер",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC_2UAdzHGR-mN6O2483iwxwHaH5RcJJK4kDMCuIq7RdEXpk91um4gmV3rIg6tJ36bIc&usqp=CAU",
            "title": "Моя страсть — в создании уникальных, практичных интерфейсов. Повышаю эффективность проектов через инновации, улучшая стандарты пользовательского опыта.",
            "target": "Я верю, что хороший дизайн и качественная функциональность идут рука об руку. Я стараюсь создавать интерфейсы, которые удовлетворяют потребности пользователей и выделяются на фоне конкурентов. Я считаю, что детали имеют значение, и в каждом проекте я стремлюсь к максимальной точности и продуманности.",
            "timer": 180000
        }
    ];

    function hideAvatar(person: Person) {
        person.avatar = "";
    }

    function startTimer(person: Person) {
        setTimeout(() => hideAvatar(person), person.timer); 
    }

    response.forEach((person: Person) => startTimer(person));

    return NextResponse.json(response);
}
