# minimal-multipage-web
A minimalist multi-page website project

<img width="1878" height="895" alt="Capture d'écran 2025-07-18 220344" src="https://github.com/user-attachments/assets/5cd443e9-867f-4e89-bda0-3c36eea9a972" />


## Project Purpose

This repository contains a static website with a sidebar navigation, designed for easy maintenance and accessibility. It is built with HTML, CSS, and JavaScript, and organized into clear sections for Discover, News, Settings, About, Contact, and Legals.

<img width="1876" height="884" alt="Capture d'écran 2025-07-18 220413" src="https://github.com/user-attachments/assets/20d5ea96-6087-48a1-b1b8-ea08c92a2164" />

## How to Use

- Open `index.html` in your browser to view the main page.
- The sidebar menu provides navigation to all major sections. Each section is a folder with its own `index.html`.
- All changes to HTML, CSS, or JS are reflected immediately—no build step required.

## Structure

- `index.html`: Main entry point, includes sidebar and main content.
- `style.css`: All site styles.
- `script.js`: Handles sidebar interactivity.
- Section folders (e.g., `Discover ou product/`, `News/`, etc.): Each contains its own `index.html`, `style.css`, and assets.

## Accessibility & SEO

- Semantic HTML5 elements and ARIA attributes are used for navigation and interactive elements.
- SVG icons include `<title>` and `<desc>` for screen readers.
- Meta tags in `<head>` improve SEO and browser rendering.
- Overlay is hidden from assistive tech using `aria-hidden`.

## Maintenance Guidelines

- To add a new section, create a folder with an `index.html` and add a link in the sidebar menu.
- Use consistent class and folder naming (French/English mix).
- Keep ARIA roles and labels up to date if you change the structure.

<img width="1884" height="896" alt="Capture d'écran 2025-07-18 220321" src="https://github.com/user-attachments/assets/69ce507c-c0db-46aa-ba5a-57ec907cf8f9" />

## License

This project is provided as-is for educational and demonstration purposes.

---

# README minimal-multipage-web (Français)

## Objectif du projet

Ce dépôt contient un site web statique avec une navigation latérale, conçu pour une maintenance et une accessibilité faciles. Il est construit avec HTML, CSS et JavaScript, et organisé en sections claires : Découvrir, Actualités, Paramètres, À propos, Contact et Mentions légales.

## Utilisation

- Ouvrez `index.html` dans votre navigateur pour afficher la page principale.
- Le menu latéral permet de naviguer vers toutes les sections principales. Chaque section est un dossier avec son propre `index.html`.
- Aucune étape de compilation n'est nécessaire.

## Structure

- `index.html` : point d'entrée principal, inclut le menu latéral et le contenu principal.
- `style.css` : toutes les règles de style du site.
- `script.js` : gère l'interactivité du menu latéral.
- Dossiers de section (ex : `Discover ou product/`, `News/`, etc.) : chacun contient son propre `index.html`, `style.css` et ses ressources.

## Accessibilité & SEO

- Utilisation d'éléments HTML5 sémantiques et d'attributs ARIA pour la navigation et les éléments interactifs.
- Les icônes SVG incluent `<title>` et `<desc>` pour les lecteurs d'écran.
- Les balises meta dans `<head>` améliorent le SEO et le rendu du navigateur.
- L'overlay est caché des technologies d'assistance grâce à `aria-hidden`.

## Conseils de maintenance

- Pour ajouter une nouvelle section, créez un dossier avec un `index.html` et ajoutez un lien dans le menu latéral.
- Utilisez une nomenclature cohérente pour les classes et les dossiers (mélange français/anglais).
- Gardez les rôles et labels ARIA à jour si vous modifiez la structure.

## Conseils pour les développeurs

- Utilisez les outils de développement du navigateur pour le débogage et l'inspection de la mise en page.
- Les logs dans `script.js` sont visibles dans la console du navigateur.

## Exemple : Ajouter un lien dans le menu latéral

```html
<li>
  <a href="Settings/index.html">Paramètres</a>
</li>
```

## Licence

Ce projet est fourni tel quel à des fins éducatives et de démonstration.

