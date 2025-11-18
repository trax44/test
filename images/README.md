# Guide des Médias RHOBS

Ce dossier contient toutes les images et médias utilisés sur le site RHOBS.

## Structure des dossiers

```
images/
├── README.md (ce fichier)
├── hero-dashboard.png       - Image principale page d'accueil
├── screenshot-analyse-temporelle.png  - Screenshot pour la page Analyse Temporelle
└── logo.png (optionnel)     - Logo RHOBS si vous souhaitez utiliser une image
```

## Images à ajouter et leurs spécifications

### 1. hero-dashboard.png
- **Utilisé sur :** Page d'accueil (index.html)
- **Emplacement dans le code :** ligne ~69
- **Dimensions recommandées :** 800x500px minimum
- **Format :** PNG ou JPG
- **Description :** Capture d'écran ou mockup du tableau de bord RHOBS montrant les indicateurs RH
- **Effet appliqué :** Ombre portée + rotation 3D au survol

### 2. screenshot-analyse-temporelle.png
- **Utilisé sur :** Page Analyse Temporelle (analyse-temporelle.html)
- **Emplacement dans le code :** ligne ~90
- **Dimensions recommandées :** 900x500px minimum
- **Format :** PNG ou JPG
- **Description :** Capture d'écran de la plateforme montrant les graphiques d'évolution temporelle
- **Effet appliqué :** Ombre 3D + inclinaison + effet au survol

### 3. logo.png (optionnel)
- **Utilisé sur :** Toutes les pages (dans le header)
- **Dimensions recommandées :** 200x80px ou SVG
- **Format :** PNG avec fond transparent ou SVG
- **Note :** Actuellement le logo est en texte HTML stylisé. Vous pouvez le remplacer par une image.

## Comment ajouter des images

### Méthode 1 : Via la ligne de commande
```bash
# Copier une image depuis votre machine locale
cp /chemin/vers/votre/image.png /home/user/test/images/hero-dashboard.png

# Ou télécharger depuis une URL
wget -O /home/user/test/images/hero-dashboard.png "https://example.com/image.png"
```

### Méthode 2 : Upload manuel
1. Ouvrez votre gestionnaire de fichiers
2. Naviguez vers `/home/user/test/images/`
3. Glissez-déposez vos images dans ce dossier
4. Renommez-les selon les noms attendus ci-dessus

### Méthode 3 : Créer un placeholder temporaire
Si vous n'avez pas encore les vraies images, utilisez un service de placeholder :
```bash
# Télécharger des placeholders temporaires
wget -O /home/user/test/images/hero-dashboard.png "https://via.placeholder.com/800x500/1D3C70/FFFFFF?text=Dashboard+RHOBS"
wget -O /home/user/test/images/screenshot-analyse-temporelle.png "https://via.placeholder.com/900x500/4D7DD1/FFFFFF?text=Analyse+Temporelle"
```

## Fallback automatique

Le site inclut des fallbacks SVG automatiques pour chaque image :
- Si l'image n'est pas trouvée, un placeholder SVG s'affiche automatiquement
- Le placeholder utilise les couleurs de la charte graphique RHOBS
- Il affiche le nom de l'image attendue

## Formats supportés

- **PNG** : Recommandé pour les captures d'écran avec transparence
- **JPG/JPEG** : Pour les photos ou images sans transparence
- **SVG** : Pour les logos et icônes (redimensionnement sans perte)
- **WebP** : Format moderne pour une meilleure compression (navigateurs récents)

## Optimisation des images

Pour de meilleures performances web, optimisez vos images :

```bash
# Installer des outils d'optimisation (si disponibles)
# Pour PNG
pngquant hero-dashboard.png --quality=65-80 --output hero-dashboard-optimized.png

# Pour JPG
jpegoptim --max=85 screenshot-analyse-temporelle.jpg

# Ou utilisez des outils en ligne :
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

## Vidéo pour People Analytics

Sur la page People Analytics, un espace est réservé pour une vidéo :
- **Format :** MP4, WebM ou lien YouTube/Vimeo
- **Emplacement :** `<div class="video-placeholder">` dans people-analytics.html

### Pour ajouter une vidéo hébergée :
Remplacez le div placeholder par :
```html
<video controls class="screenshot">
    <source src="images/demo-platform.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la vidéo.
</video>
```

### Pour ajouter une vidéo YouTube/Vimeo :
```html
<iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/VOTRE_VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="screenshot">
</iframe>
```

## Checklist avant mise en production

- [ ] Ajouter hero-dashboard.png
- [ ] Ajouter screenshot-analyse-temporelle.png
- [ ] (Optionnel) Ajouter logo.png
- [ ] (Optionnel) Ajouter vidéo démo People Analytics
- [ ] Vérifier que toutes les images s'affichent correctement
- [ ] Optimiser les images pour le web (<500KB par image recommandé)
- [ ] Tester le responsive sur mobile/tablette

## Notes importantes

1. **Droits d'auteur :** Assurez-vous d'avoir les droits sur toutes les images utilisées
2. **Confidentialité :** Anonymisez les données sensibles dans les captures d'écran
3. **Taille des fichiers :** Gardez les images <1MB pour de bonnes performances
4. **Alt text :** Les images ont déjà des attributs alt descriptifs dans le code HTML

## Support

Pour toute question sur l'intégration des médias, contactez l'équipe technique RHOBS.
