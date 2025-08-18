

## Atomic Design 

| Layer         | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| **Atoms**     | Smallest UI elements (Button, Input, Label, Icon)                      |
| **Molecules** | Combinations of atoms (Input + Label, Avatar + Name)                   |
| **Organisms** | Sections of UI (NavBar, ProductGrid, Footer)                           |
| **Templates** | Page layouts with structure, no content (e.g. header + main + sidebar) |
| **Pages**     | Actual screens or views, assembled from templates + content + logic    |

### Example Layout
src/
└── components/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.module.css
│   └── TextInput/
│       └── TextInput.tsx
│
├── molecules/
│   ├── FormGroup/
│   │   └── FormGroup.tsx
│   └── Card/
│       └── Card.tsx
│
├── organisms/
│   ├── Header/
│   └── FeatureSection/
│
├── templates/
│   └── HomePageLayout/
│       └── HomePageLayout.tsx
│
└── pages/
├── Home/
│   └── Home.tsx
└── About/
└── About.tsx
