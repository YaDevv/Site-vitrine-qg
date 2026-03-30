# Le QG de Mag — Site Web

## Structure du projet

```
qg-de-mag/
├── index.html              ← Page principale
├── css/
│   └── style.css           ← Tous les styles (variables, sections, animations)
├── js/
│   └── main.js             ← Scripts (tabs, scroll reveal, nav active)
├── public/
│   └── images/
│       ├── hero-bg.jpg     ← Image de fond du hero (photo du bar)
│       ├── interieur.jpg   ← Photo intérieure pour la section Ambiance
│       └── logo.png        ← Logo du QG de Mag (optionnel)
└── README.md               ← Ce fichier
```

## Comment ajouter vos photos

1. Placez vos photos dans le dossier `public/images/`
2. Dans `index.html`, remplacez les URLs Unsplash par vos chemins locaux :
   - Hero : dans la propriété CSS `background` de `#hero` dans `style.css`
   - Ambiance : `<img src="public/images/interieur.jpg" ...>`

## Technologies utilisées

- HTML5 sémantique
- CSS3 pur (variables CSS, animations, grid, flexbox)
- JavaScript vanilla (pas de dépendances)
- Google Fonts : Bebas Neue + Nunito

## Personnalisation rapide

Toutes les couleurs sont dans `:root` au début de `css/style.css` :
- `--bordeaux` : couleur principale
- `--gold`     : couleur accent
- `--cream`    : fond clair

## Déploiement

Ouvrir `index.html` directement dans un navigateur, ou déposer le dossier
sur n'importe quel hébergeur statique (Netlify, GitHub Pages, OVH...).
