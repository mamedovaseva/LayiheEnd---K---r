const faqs = [
{ question: "Bakıda ən çox turistik yerlər hansılardır?", answer: "İçərişəhər, Qız Qalası, Heydər Əliyev Mərkəzi, və Bakı Bulvarı." },
{ question: "Bakıya necə getmək olar?", answer: "Bakıya təyyarə, qatar, avtobus və şəxsi avtomobil ilə səyahət edə bilərsiniz." },
{ question: "Bakıda haralarda qala bilərəm?", answer: "Bakıda çoxsaylı otellər, qonaq evləri və Airbnb seçimləri mövcuddur." },
{ question: "Bakıda ən yaxşı restoranlar hansılardır?", answer: "Nərgiz Restoranı, Firuza, və Şirvanşah Muzey Restoranı." },
{ question: "Bakıda ictimai nəqliyyat necədir?", answer: "Bakıda metro, avtobus və taksi xidmətlərindən istifadə edə bilərsiniz." },
{ question: "Gəncədə hansı tarixi yerlər var?", answer: "Nizami Gəncəvi Məqbərəsi, Xan Bağı və Gəncə Qapıları Muzeyi." },
{ question: "Gəncəyə necə getmək olar?", answer: "Gəncəyə təyyarə, qatar, avtobus və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Gəncədə haralarda qala bilərəm?", answer: "Gəncədə otellər və qonaq evləri mövcuddur." },
{ question: "Gəncənin ən məşhur yeməkləri hansılardır?", answer: "Gəncə paxlavası və dovğa." },
{ question: "Gəncədə hansı festivallar keçirilir?", answer: "Nizami Gəncəvi Festivalı və Novruz bayramı tədbirləri." },
{ question: "Lənkəranda hansı turistik yerlər var?", answer: "Hirkan Milli Parkı, Xan Evi və Lənkəran Çayı sahəsi." },
{ question: "Lənkərana necə getmək olar?", answer: "Lənkərana qatar, avtobus və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Lənkəranda haralarda qala bilərəm?", answer: "Lənkəranda otellər və qonaq evləri mövcuddur." },
{ question: "Lənkəranın yerli yeməkləri hansılardır?", answer: "Ləvəngi, balıq yeməkləri və Lənkəran çayı." },
{ question: "Lənkəranda hansı milli parklar var?", answer: "Hirkan Milli Parkı." },
{ question: "Mingəçevirdə hansı turistik yerlər var?", answer: "Mingəçevir Su Anbarı, Kür çayı və Energetiklər Parkı." },
{ question: "Mingəvirə necə getmək olar?", answer: "Mingəvirə qatar, avtobus və şəxsi avtomobil ilə gedə bilərsiniz." },
{ question: "Mingəçevirdə haralarda qala bilərəm?", answer: "Mingəçevirdə otellər və qonaq evləri." },
{ question: "Mingəvirin məşhur yeməkləri hansılardır?", answer: "Balıq kababı və qutab." },
{ question: "Mingəçevirdə hansı festivallar keçirilir?", answer: "Su İdmanları Festivalı." },
{ question: "Şamaxıda hansı tarixi yerlər var?", answer: "Şamaxı Cümə Məscidi, Dəmirçi kəndi və Yeddi Günbəz." },
{ question: "Şamaxıya necə getmək olar?", answer: "Şamaxıya avtobus və şəxsi avtomobil ilə gedə bilərsiniz." },
{ question: "Şamaxıda haralarda qala bilərəm?", answer: "Şamaxıda otellər və kənd qonaq evləri mövcuddur." },
{ question: "Şamaxının yerli yeməkləri hansılardır?", answer: "Ət qovurma və şorba növləri." },
{ question: "Şamaxıda hansı təbii gözəlliklər var?", answer: "Göygöl və Pirkuli." },
{ question: "Qəbələdə hansı turistik yerlər var?", answer: "Tufandağ, Nohur Gölü və Qəbələ Arxeologiya Muzeyi." },
{ question: "Qəbələyə necə getmək olar?", answer: "Qəbələyə avtobus və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Qəbələdə haralarda qala bilərəm?", answer: "Qəbələdə otellər, villalar və yayla evləri mövcuddur." },
{ question: "Qəbələnin məşhur yeməkləri hansılardır?", answer: "Təndir çörəyi və ət kababı." },
{ question: "Qəbələdə hansı festivallar keçirilir?", answer: "Qəbələ Musiqi Festivalı." },
{ question: "Qusarda hansı turistik yerlər var?", answer: "Şahdağ Qış Turizm Kompleksi və Laza kəndi." },
{ question: "Qusara necə getmək olar?", answer: "Qusara avtobus və ya şəxsi avtomobil ilə gedə bilərsiniz." },
{ question: "Qusarda haralarda qala bilərəm?", answer: "Şahdağ Qış Turizm Kompleksində və otellərdə qala bilərsiniz." },
{ question: "Qusarda hansı qış idman növləri mövcuddur?", answer: "Xizək sürmə və snoubord." },
{ question: "Qusarda yayda hansı fəaliyyətlər mövcuddur?", answer: "Dağ yürüşləri və təbiət gəzintiləri." },
{ question: "Qubada hansı yerləri ziyarət etməliyəm?", answer: "Qəçrəş meşəsi, Afurca şəlaləsi və Xınalıq kəndi." },
{ question: "Qubaya necə getmək olar?", answer: "Qubaya avtobus və ya şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Qubada haralarda qala bilərəm?", answer: "Qubada otellər və yayla qonaq evləri mövcuddur." },
{ question: "Qubada hansı məşhur məhsullar mövcuddur?", answer: "Almalar və xalça məhsulları." },
{ question: "Qubada hansı dağ yürüşləri mövcuddur?", answer: "Xınalıq və Tufandağ yürüş marşrutları." },
{ question: "Şəkidə hansı turistik yerlər var?", answer: "Şəki Xan Sarayı, Karvansaray və Kiş Alban Kilsəsi." },
{ question: "Şəkiyə necə getmək olar?", answer: "Şəkiyə avtobus, qatar və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Şəkidə haralarda qala bilərəm?", answer: "Şəki Karvansarayı, otellər və qonaq evləri." },
{ question: "Şəkidə ən məşhur yeməklər hansılardır?", answer: "Şəki pitisi, paxlava və yarpax dolması." },
{ question: "Şəkidə hansı festivallar keçirilir?", answer: "İpək Yolu Festivalı." },
{ question: "Naxçıvanda hansı tarixi yerlər var?", answer: "Əshabi-Kəhf Ziyarətgahı, Möminə Xatun Türbəsi, və Alinja Qalası." },
{ question: "Naxçıvana necə getmək olar?", answer: "Naxçıvana təyyarə ilə və ya İran üzərindən avtomobil yolu ilə gedə bilərsiniz." },
{ question: "Naxçıvanda haralarda qala bilərəm?", answer: "Naxçıvanda otellər və qonaq evləri mövcuddur." },
{ question: "Naxçıvanda yerli yeməklər hansılardır?", answer: "Qovurma, fəsəli və piti." },
{ question: "Naxçıvanda hansı milli parklar var?", answer: "Ordubad Milli Parkı." },
{ question: "Xızıda hansı təbii yerlər var?", answer: "Altıağac Milli Parkı və Xızı dağları." },
{ question: "Xızıya necə getmək olar?", answer: "Xızıya şəxsi avtomobil və avtobus ilə getmək mümkündür." },
{ question: "Xızıda haralarda qala bilərəm?", answer: "Xızıda kənd qonaq evləri və Altıağac ətrafında yerləşən istirahət mərkəzləri." },
{ question: "Xızının ən məşhur yeməkləri hansılardır?", answer: "Kənd məhsulları və təbii bal." },
{ question: "Xızıda hansı fəaliyyətlər mövcuddur?", answer: "Təbiət yürüşləri və piknik." },
{ question: "Qaxda hansı tarixi yerlər var?", answer: "Sumuq Qala və Qum kəndində qədim alban məbədi." },
{ question: "Qaxa necə getmək olar?", answer: "Qaxa avtobus və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "Qaxda haralarda qala bilərəm?", answer: "Qaxda otellər və kənd qonaq evləri mövcuddur." },
{ question: "Qaxın ən məşhur yeməkləri hansılardır?", answer: "Fəsəli və dovğa." },
{ question: "Qaxda hansı festivallar keçirilir?", answer: "Qax Mədəniyyət və Sənət Festivalı." },
{ question: "İsmayıllıda hansı turistik yerlər var?", answer: "Lahıc kəndi, Basqal qəsəbəsi və Qəbələ-İsmayıllı dağ marşrutu." },
{ question: "İsmayıllıya necə getmək olar?", answer: "İsmayıllıya avtobus və şəxsi avtomobil ilə getmək mümkündür." },
{ question: "İsmayıllıda haralarda qala bilərəm?", answer: "İsmayıllıda kənd qonaq evləri və otellər mövcuddur." },
{ question: "İsmayıllının məşhur yeməkləri hansılardır?", answer: "Dəvə ətindən hazırlanan yeməklər və basdırma." },
{ question: "İsmayıllıda hansı festivallar keçirilir?", answer: "Basqal İpək Festivalı." },
{ "question": "Şəkidə hansı turistik yerlər var?", "answer": "Şəki Xan Sarayı, Karvansaray və Kiş Alban Kilsəsi." },
{ "question": "Şəkiyə necə getmək olar?", "answer": "Şəkiyə avtobus, qatar və şəxsi avtomobil ilə getmək mümkündür." },
{ "question": "Şəkidə haralarda qala bilərəm?", "answer": "Şəki Karvansarayı, otellər və qonaq evləri." },
{ "question": "Şəkidə ən məşhur yeməklər hansılardır?", "answer": "Şəki pitisi, paxlava və yarpax dolması." },
{ "question": "Şəkidə hansı festivallar keçirilir?", "answer": "İpək Yolu Festivalı." },
{ "question": "Şamaxıda hansı tarixi yerlər var?", "answer": "Şamaxı Cümə Məscidi, Dəmirçi kəndi və Yeddi Günbəz." },
{ "question": "Şamaxıya necə getmək olar?", "answer": "Şamaxıya avtobus və şəxsi avtomobil ilə gedə bilərsiniz." },
{ "question": "Şamaxıda haralarda qala bilərəm?", "answer": "Şamaxıda otellər və kənd qonaq evləri mövcuddur." },
{ "question": "Şamaxının yerli yeməkləri hansılardır?", "answer": "Ət qovurma və şorba növləri." },
{ "question": "Şamaxıda hansı təbii gözəlliklər var?", "answer": "Göygöl və Pirkuli." }
];
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.getElementById("faq-container");
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement("div");
        faqItem.className = "faq-item";
        const question = document.createElement("div");
        question.className = "faq-question";
        question.textContent = `${index + 1}. ${faq.question}`;
        question.onclick = () => toggleAnswer(faqItem);
        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.textContent = faq.answer;

        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        faqContainer.appendChild(faqItem);
    });
});
function toggleAnswer(item) {
    const answer = item.querySelector(".faq-answer");
    answer.classList.toggle("active");
}