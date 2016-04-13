const Translations = {
  HU: {
    acceptance: 'Elfogadás',
    curiosity: 'Kíváncsiság',
    freedom: 'Szabadság',
    goal: 'Cél',
    honor: 'Megbecsülés',
    mastery: 'Szakmai kiválóság',
    order: 'Rend',
    power: 'Hatalom',
    relatedness: 'Kötődés',
    status: 'Státusz',
  }
};

export function translate(motivator, lang = 'HU') {
  return Translations[lang][motivator];
}
