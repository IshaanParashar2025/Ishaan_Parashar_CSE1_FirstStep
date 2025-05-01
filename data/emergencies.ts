interface AdditionalInfo {
  content: string;
}

interface EmergencyStep {
  id: string;
  description: string;
  image?: string;
}

interface Emergency {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: EmergencyStep[];
  additionalInfo?: AdditionalInfo[];
}

export const emergencies: Emergency[] = [
  {
    id: '1',
    title: 'Choking',
    description: 'How to help someone who is choking',
    icon: 'medical-outline',
    steps: [
      {
        id: '1-1',
        description: 'Ask if they can cough or speak',
      },
      {
        id: '1-2',
        description: 'Stand behind them and lean them forward',
      },
      {
        id: '1-3',
        description: 'Give up to 5 sharp blows between shoulder blades',
      },
      {
        id: '1-4',
        description: 'Check if the blockage has cleared',
      },
    ],
    additionalInfo: [
      {
        content: "Cut food into small pieces, chew thoroughly, and avoid talking while eating."
      },
      {
        content: "Young children, elderly, and people with swallowing difficulties are at higher risk."
      },
      {
        content: "If the person becomes unconscious or if the obstruction cannot be removed."
      }
    ]
  },
  {
    id: '2',
    title: 'Heart Attack',
    description: 'Emergency steps for suspected heart attack',
    icon: 'heart-outline',
    steps: [
      {
        id: '2-1',
        description: 'Call emergency services immediately',
      },
      {
        id: '2-2',
        description: 'Have the person sit down and rest',
      },
      {
        id: '2-3',
        description: 'Loosen any tight clothing',
      },
      {
        id: '2-4',
        description: 'Ask if they take any heart medication',
      },
    ],
    additionalInfo: [
      {
        content: "Chest pain/pressure, shortness of breath, pain in arms/back/neck/jaw, cold sweat, nausea."
      },
      {
        content: "High blood pressure, high cholesterol, smoking, obesity, diabetes, family history."
      },
      {
        content: "Regular exercise, healthy diet, stress management, regular check-ups, quit smoking."
      }
    ]
  },
  {
    id: '3',
    title: 'Animal Bite',
    description: 'Steps to care for a minor animal bite or claw wound',
    icon: 'paw-outline',
    steps: [
      {
        id: '3-1',
        description: 'Wash the wound gently with soap and water.',
      },
      {
        id: '3-2',
        description: 'Apply an antibiotic cream or ointment.',
      },
      {
        id: '3-3',
        description: 'Cover the wound with a clean bandage.',
      },
      
    ],
    additionalInfo: [
      {
        content: 'Consult a doctor if you are unsure whether the animal has rabies.'
      },
      {
        content: 'Consult a doctor if you are unsure whether the animal has rabies.'
      },
      {
        content: 'Get a tetanus booster shot if you haven’t had one in the past 5 years.'
      }
    ]
  },
  {
    id: '4',
    title: 'Anaphylaxis',
    description: 'Steps to care for a life-threatening allergic reaction (anaphylaxis)',
    icon: 'alert-circle-outline',
    steps: [
      {
        id: '4-1',
        description: 'Call 911 or your local emergency number immediately.'
      },
      {
        id: '4-2',
        description: 'Ask if the person is carrying an epinephrine autoinjector (EpiPen, Auvi-Q, etc.).'
      },
      {
        id: '4-3',
        description: 'Help inject the medicine if needed by pressing the autoinjector against the person’s thigh.'
      },
      {
        id: '4-4',
        description: 'Have the person lie face up and stay still.'
      },
      {
        id: '4-5',
        description: 'Loosen tight clothing and cover the person with a blanket.'
      },
      {
        id: '4-6',
        description: 'If vomiting or bleeding from the mouth occurs, turn the person to the side to prevent choking.'
      },
      {
        id: '4-7',
        description: 'If there are no signs of breathing, coughing, or movement, begin CPR with about 100 chest presses per minute until help arrives.'
      }
    ],
    additionalInfo: [
      {
        content: 'Get emergency treatment even if symptoms seem to improve, as they can return.'
      },
      {
        content: 'Antihistamine pills like diphenhydramine (Benadryl) are not enough to treat anaphylaxis.'
      },
      {
        content: 'Do not give anything to drink to a person having anaphylaxis.'
      },
      {
        content: 'If you have had a severe allergic reaction before, ask your doctor if you should carry an epinephrine autoinjector.'
      }
    ]
  },
  {
    id: '5',
    title: 'Black Eye',
    description: 'Steps to care for a black eye and signs when to seek medical help',
    icon: 'eye-outline',
    steps: [
      {
        id: '5-1',
        description: 'Apply a cold compress to the area around the eye as soon as possible after the injury. Use gentle pressure and avoid pressing directly on the eye.'
      },
      {
        id: '5-2',
        description: 'Repeat applying the cold compress several times a day for the first one or two days.'
      },
      {
        id: '5-3',
        description: 'After a few days, apply warm or hot compresses to help heal the area. Repeat several times a day.'
      }
    ],
    additionalInfo: [
      {
        content: 'Seek medical help if you see blood in the white or colored part of the eye.'
      },
      {
        content: 'Seek medical help if you experience double vision, blurred vision, or severe pain.'
      },
      {
        content: 'Seek medical help if there is bruising around both eyes or bleeding from the nose, which may suggest a skull fracture.'
      }
    ]
  },
  {
    id: '6',
    title: 'Bruise',
    description: 'Steps to care for a bruise and when to seek medical advice',
    icon: 'bandage-outline',
    steps: [
      {
        id: '6-1',
        description: 'Elevate the bruised area above heart level if possible.'
      },
      {
        id: '6-2',
        description: 'Apply an ice pack wrapped in a thin towel for 20 minutes. Repeat several times a day for one or two days.'
      },
      {
        id: '6-3',
        description: 'Use an elastic bandage around the bruised area if there is swelling, but do not wrap it too tightly.'
      },
      {
        id: '6-4',
        description: 'If the skin is not broken, you do not need to bandage the bruise.'
      },
      {
        id: '6-5',
        description: 'Consider taking a nonprescription pain reliever if needed.'
      }
    ],
    additionalInfo: [
      {
        content: 'Consult a healthcare professional if you have very painful swelling in the bruised area.'
      },
      {
        content: 'Seek help if you suspect the bruise was caused by abuse.'
      },
      {
        content: 'Consult a doctor if pain continues three days after a minor injury.'
      },
      {
        content: 'Seek help if you have frequent, large, or painful bruises.'
      },
      {
        content: 'Consult a doctor if bruises begin suddenly or for no apparent reason.'
      },
      {
        content: 'Seek help if you notice a lump forming over the bruise (possible hematoma).'
      },
      {
        content: 'Consult a doctor if you have unusual bleeding, such as from the nose or gums.'
      }
    ]
  },
  {
    id: '7',
    title: 'Blister',
    description: 'How to care for a blister, how to drain it safely, and when to seek medical help',
    icon: 'ellipse-outline',
    steps: [
      {
        id: '7-1',
        description: 'If the blister isn’t painful, try to keep it from breaking open to reduce infection risk.'
      },
      {
        id: '7-2',
        description: 'Cover the blister with a bandage or moleskin with a hole cut to fit around the blister.'
      },
      {
        id: '7-3',
        description: 'To drain a blister: Wash your hands and the blister, sterilize a needle, prick near the edge, drain the fluid but leave the skin intact.'
      },
      {
        id: '7-4',
        description: 'Apply an antibiotic ointment or petroleum jelly and cover with a nonstick bandage or gauze.'
      },
      {
        id: '7-5',
        description: 'After several days, cut away dead skin using sterilized scissors or tweezers, reapply ointment, and cover again.'
      },
      {
        id: '7-6',
        description: 'Check the blister area daily for signs of infection.'
      }
    ],
    additionalInfo: [
      {
        content: 'Seek medical care if the blister looks infected: expanding redness, increased pain, pus, or warmth.'
      },
      {
        content: 'Wear well-fitting shoes and use insoles or gel pads to reduce friction.'
      },
      {
        content: 'Choose moisture-wicking socks and use foot powder inside socks.'
      },
      {
        content: 'Tape areas prone to blisters'
      }
    ]
  },
  {
    id: '8',
    title: 'Minor Burns',
    description: 'First aid treatment for minor burns to relieve pain and prevent complications.',
    icon: 'flame-outline',
    steps: [
      {
        id: '8-1',
        description: 'Cool the burn under cool (not cold) running water for about 10 minutes or apply a cool, wet cloth if water isn’t available.'
      },
      {
        id: '8-2',
        description: 'Remove rings or tight items from the affected area before swelling begins.'
      },
      {
        id: '8-3',
        description: 'After cooling, apply a moisturizing lotion such as aloe vera or cocoa butter to prevent drying.'
      },
      {
        id: '8-4',
        description: 'Cover the burn loosely with a clean, nonstick bandage to protect the skin.'
      },
      {
        id: '8-5',
        description: 'Take a nonprescription pain reliever like ibuprofen (Advil, Motrin) or acetaminophen (Tylenol) if needed.'
      },
      {
        id: '8-6',
        description: 'Do not use cold water, do not break blisters, and do not remove clothing stuck to the burn.'
      }
    ],
    additionalInfo: [
      {
        content: 'Seek medical care if the burn affects sensitive areas like the eyes, mouth, hands, or genitals, or if signs of infection appear.'
      }
    ]
  },
  {
    id: '9',
    title: 'Major Burns',
    description: 'Emergency steps for severe burns that require urgent medical attention.',
    icon: 'flame-outline',
    steps: [
      {
        id: '9-1',
        description: 'Call 112 immediately for deep burns, burns larger than 3 inches, burns on hands, feet, face, groin, major joints, or burns caused by chemicals or electricity.'
      },
      {
        id: '9-2',
        description: 'Protect the burned person from further harm. If safe, remove them from the burn source. Ensure electrical sources are off first.'
      },
      {
        id: '9-3',
        description: 'Check if the person is breathing. Begin rescue breathing if necessary and you know how.'
      },
      {
        id: '9-4',
        description: 'Remove jewelry, belts, and tight items carefully before the burned area swells.'
      },
      {
        id: '9-5',
        description: 'Loosely cover the burn with a clean gauze or cloth to protect the area.'
      },
      {
        id: '9-6',
        description: 'Raise the burned area above heart level if possible to reduce swelling.'
      },
      {
        id: '9-7',
        description: 'Watch for symptoms of shock, such as cool, clammy skin, a weak pulse, or shallow breathing.'
      }
    ],
    additionalInfo: [
      {
        content: 'If the burn is deep and you haven’t had a tetanus shot in the last 5 years, get a booster within 48 hours.'
      }
    ]
  },
  {
    "id": "10",
    "title": "Chemical Burns",
    "description": "How to recognize chemical burns, when to seek emergency help, and how to apply first aid treatment.",
    "icon": "flask-outline",
    "steps": [
      {
        "id": "10-1",
        "description": "Call 112 (India emergency number) or seek immediate help for major chemical burns that are deep, large, or affect sensitive areas like hands, face, or joints."
      },
      {
        "id": "10-2",
        "description": "If unsure about chemical exposure, call a poison control center and then call 112 if needed."
      },
      {
        "id": "10-3",
        "description": "Protect the person from further harm by removing dry chemicals with gloves and brushing off any residue."
      },
      {
        "id": "10-4",
        "description": "Remove contaminated clothing or jewelry and rinse the affected area with water for at least 20 minutes, preferably using a shower."
      },
      {
        "id": "10-5",
        "description": "Loosely cover the burn with gauze or a clean cloth."
      },
      {
        "id": "10-6",
        "description": "Rinse again if pain persists, continuing to flush the area with water."
      },
      {
        "id": "10-7",
        "description": "For major burns, monitor the person for signs of shock: cool, clammy skin, weak pulse, and shallow breathing."
      }
    ],
    "additionalInfo": [
      {
        "content": "Major chemical burns often need emergency medical attention; minor ones can sometimes be managed with first aid."
      },
      {
        "content": "Carry the chemical container or its name when seeking medical help."
      },
      {
        "content": "Minor chemical burns on sensitive areas like eyes, mouth, hands, or genitals may require emergency care."
      },
      {
        "content": "Babies and older adults might need emergency care even for minor chemical burns."
      }
    ]
  },
  {
    "id": "11",
    "title": "Chemical Splash in the Eye",
    "description": "How to respond immediately to a chemical splash in the eye and when to seek emergency medical help.",
    "icon": "eye-outline",
    "steps": [
      {
        "id": "11-1",
        "description": "Seek emergency care from an eye specialist (ophthalmologist) or call 112 (India emergency number). Bring the chemical container or name with you."
      },
      {
        "id": "11-2",
        "description": "Wash your hands thoroughly with soap and water to remove any chemicals before touching your eye."
      },
      {
        "id": "11-3",
        "description": "Remove contact lenses if you are wearing them."
      },
      {
        "id": "11-4",
        "description": "Flush the affected eye with clean, lukewarm tap water for at least 20 minutes."
      },
      {
        "id": "11-5",
        "description": "Use the quickest available method: shower stream over forehead, faucet stream over bridge of nose, or an emergency eye-rinse station."
      },
      {
        "id": "11-6",
        "description": "For young children, flush their eye by pouring water on their forehead or over the bridge of their nose while they lie down or lean back."
      }
    ],
    "additionalInfo": [
      {
        "content": "Do not rub the eye, as it can cause further damage."
      },
      {
        "content": "Do not put anything except water or sterile saline rinse into the eye unless instructed by emergency personnel."
      },
      {
        "content": "Wearing sunglasses can help reduce light sensitivity during transport to emergency care."
      },
      {
        "content": "Alkali chemical burns are often more serious than acid burns and require immediate treatment."
      }
    ]
  },  
  {
    "id": "12",
    "title": "Corneal Abrasion",
    "description": "How to recognize and treat a superficial scratch on the cornea and important steps to avoid worsening the injury.",
    "icon": "eye-off-outline",
    "steps": [
      {
        "id": "12-1",
        "description": "Seek prompt medical attention for a corneal abrasion to prevent infection and complications."
      },
      {
        "id": "12-2",
        "description": "Rinse your eye with clean water or saline solution using an eyecup, small glass, or an eye-rinse station if available."
      },
      {
        "id": "12-3",
        "description": "Blink several times to try dislodging any small particles."
      },
      {
        "id": "12-4",
        "description": "Gently pull the upper eyelid over the lower eyelid to encourage tearing and possibly brush away a foreign object."
      }
    ],
    "additionalInfo": [
      {
        "content": "Do not attempt to remove embedded objects from the eye."
      },
      {
        "content": "Do not rub your eye after an injury."
      },
      {
        "content": "Avoid touching your eye with cotton swabs, tweezers, or other tools."
      },
      {
        "content": "If you wear contact lenses, stop using them until your eye fully heals."
      },
      {
        "content": "Most corneal abrasions heal in a few days but require antibiotic drops or ointment to reduce infection risk."
      },
      {
        "content": "Symptoms include pain, blurry vision, gritty feeling, tearing, redness, light sensitivity, and headache."
      }
    ]
  },
  {
    "id": "13",
    "title": "Minor Cuts and Scrapes",
    "description": "How to properly treat minor cuts and scrapes at home and when to seek medical attention.",
    "icon": "bandage-outline",
    "steps": [
      {
        "id": "13-1",
        "description": "Wash your hands thoroughly before treating a wound to avoid infection."
      },
      {
        "id": "13-2",
        "description": "Stop the bleeding by gently pressing the wound with a clean bandage or cloth and raising the area if needed."
      },
      {
        "id": "13-3",
        "description": "Clean the wound by rinsing it under running water; wash around the wound with soap, avoiding soap inside the wound."
      },
      {
        "id": "13-4",
        "description": "Remove dirt or debris with tweezers sterilized with alcohol; seek medical help if debris remains."
      },
      {
        "id": "13-5",
        "description": "Apply a thin layer of antibiotic ointment or petroleum jelly to keep the wound moist and promote healing."
      },
      {
        "id": "13-6",
        "description": "Cover the wound with a bandage, rolled gauze, or gauze secured with paper tape to keep it clean."
      },
      {
        "id": "13-7",
        "description": "Change the covering at least once a day or whenever it becomes wet or dirty."
      }
    ],
    "additionalInfo": [
      {
        "content": "Minor scrapes may not need to be covered if they are very small and not bleeding."
      },
      {
        "content": "Stop using antibiotic ointment if a mild rash develops."
      },
      {
        "content": "Seek medical care if there are signs of infection: increased redness, pain, drainage, warmth, or swelling."
      },
      {
        "content": "A tetanus shot may be needed if the wound is deep or dirty and your last shot was over five years ago."
      }
    ]
  },
  {
    "id": "14",
    "title": "Dislocation",
    "description": "How to recognize and respond to a dislocated joint, and the immediate actions to take while waiting for medical help.",
    "icon": "accessibility-outline",
    "steps": [
      {
        "id": "14-1",
        "description": "Seek prompt medical attention if you suspect a dislocation to properly reposition the bones."
      },
      {
        "id": "14-2",
        "description": "Do not move the dislocated joint; use a splint if necessary to keep it still."
      },
      {
        "id": "14-3",
        "description": "Do not attempt to force the joint back into place as it can cause serious damage to muscles, ligaments, nerves, or blood vessels."
      },
      {
        "id": "14-4",
        "description": "Apply ice to the injured joint to help reduce swelling and control internal bleeding."
      }
    ],
    "additionalInfo": [
      {
        "content": "Common causes of dislocation include falls, car accidents, and sports injuries."
      },
      {
        "content": "Shoulders, elbows (especially in young children), thumbs, and fingers are frequent sites of dislocation."
      },
      {
        "content": "Symptoms include deformity of the joint, difficulty moving it, sudden severe pain, and swelling."
      }
    ]
  },
  {
    "id": "15",
    "title": "Electric Shock",
    "description": "How to respond to an electrical injury, when to seek emergency care, and what precautions to take.",
    "icon": "flash-outline",
    "steps": [
      {
        "id": "15-1",
        "description": "Turn off the source of electricity if possible, or use a dry, nonconducting object to separate the injured person from the source."
      },
      {
        "id": "15-2",
        "description": "Call India's emergency number if the person has severe burns, breathing problems, confusion, heart issues, or loss of consciousness."
      },
      {
        "id": "15-3",
        "description": "Begin CPR if the injured person shows no signs of circulation, such as breathing, coughing, or movement."
      },
      {
        "id": "15-4",
        "description": "Prevent the person from becoming chilled while waiting for help."
      },
      {
        "id": "15-5",
        "description": "Cover any burned areas with sterile gauze or a clean cloth; avoid using towels or blankets that may shed fibers."
      }
    ],
    "additionalInfo": [
      {
        "content": "Don't touch an injured person who is still in contact with an electrical source."
      },
      {
        "content": "Stay at least 20 feet (about 6 meters) away from high-voltage wires and call emergency services."
      },
      {
        "content": "Don't move an injured person unless absolutely necessary due to immediate danger."
      },
      {
        "content": "Always consult a healthcare professional after any electrical injury, even if symptoms seem minor."
      }
    ]
  },  
];