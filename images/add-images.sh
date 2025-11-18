#!/bin/bash

# Script pour ajouter des images au site RHOBS
# Usage: ./add-images.sh

echo "==========================================="
echo "   Script d'ajout d'images RHOBS"
echo "==========================================="
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Dossier actuel:${NC} $(pwd)"
echo ""

# Vérifier si nous sommes dans le bon dossier
if [ ! -d "/home/user/test/images" ]; then
    echo -e "${YELLOW}Création du dossier images...${NC}"
    mkdir -p /home/user/test/images
fi

cd /home/user/test/images

echo -e "${BLUE}Images attendues dans ce dossier:${NC}"
echo ""
echo "  1. hero-dashboard.png (800x500px recommandé)"
echo "     → Utilisé sur la page d'accueil"
echo ""
echo "  2. screenshot-analyse-temporelle.png (900x500px recommandé)"
echo "     → Utilisé sur la page Analyse Temporelle"
echo ""
echo "  3. logo.png (optionnel, 200x80px recommandé)"
echo "     → Logo RHOBS si vous souhaitez remplacer le logo texte"
echo ""

echo "==========================================="
echo "   Méthodes pour ajouter vos images"
echo "==========================================="
echo ""

echo -e "${GREEN}Méthode 1: Copier depuis votre machine locale${NC}"
echo "  cp /chemin/vers/votre/image.png /home/user/test/images/hero-dashboard.png"
echo ""

echo -e "${GREEN}Méthode 2: Télécharger depuis une URL${NC}"
echo "  wget -O hero-dashboard.png 'https://example.com/dashboard.png'"
echo "  # ou avec curl:"
echo "  curl -o hero-dashboard.png 'https://example.com/dashboard.png'"
echo ""

echo -e "${GREEN}Méthode 3: Glisser-déposer (interface graphique)${NC}"
echo "  1. Ouvrez votre explorateur de fichiers"
echo "  2. Naviguez vers: /home/user/test/images/"
echo "  3. Glissez-déposez vos images dans ce dossier"
echo ""

echo "==========================================="
echo "   État actuel du dossier"
echo "==========================================="
echo ""

# Lister les fichiers actuels
if [ "$(ls -A /home/user/test/images/*.png 2>/dev/null)" ]; then
    echo -e "${GREEN}Images présentes:${NC}"
    ls -lh /home/user/test/images/*.png 2>/dev/null | awk '{print "  ✓", $9, "(" $5 ")"}'
else
    echo -e "${YELLOW}Aucune image trouvée pour le moment${NC}"
fi

echo ""

# Vérifier les images manquantes
echo -e "${BLUE}Images manquantes:${NC}"
[ ! -f "hero-dashboard.png" ] && echo "  ✗ hero-dashboard.png"
[ ! -f "screenshot-analyse-temporelle.png" ] && echo "  ✗ screenshot-analyse-temporelle.png"
[ ! -f "logo.png" ] && echo "  ○ logo.png (optionnel)"

echo ""
echo "==========================================="
echo "   Exemples pratiques"
echo "==========================================="
echo ""

echo "Pour télécharger des placeholders de test:"
echo "  wget -O hero-dashboard.png 'https://via.placeholder.com/800x500/1D3C70/FFFFFF?text=Dashboard'"
echo ""

echo "Pour optimiser vos images (si outils disponibles):"
echo "  pngquant hero-dashboard.png --quality=65-80"
echo "  jpegoptim --max=85 screenshot.jpg"
echo ""

echo "Une fois les images ajoutées, committez-les:"
echo "  git add images/"
echo "  git commit -m 'feat: add website images'"
echo "  git push"
echo ""

echo "==========================================="
echo -e "${GREEN}Le dossier images est prêt!${NC}"
echo "Chemin: /home/user/test/images/"
echo "==========================================="
