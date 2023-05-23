export interface FullState {
    adType: string;
    category: string;
    paymentMethod: string;
    contactMethod: string;
    output: string;
    zipCode: string;
    place: string;
    money: number;
    time: number;
    shareAgainst: string;
    email: string;
    phone: string;
    form: string;
}

export function initialFullState(): FullState {
    return {
        adType: "",
        category: "",
        paymentMethod: "",
        contactMethod: "",
        output: "",
        zipCode: "5210",
        place: "Windisch",
        money: 0,
        time: 0,
        shareAgainst: "",
        email: "vorname.name@muster.com",
        phone: "079 123 45 67",
        form: "Kontaktformular",
    };
}
