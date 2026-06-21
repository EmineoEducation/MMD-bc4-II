// ══════════════════════════════════════════════════════════════
//  DATA · PAC BC4-II · Manager en stratégie et développement de projet digital
//  Projet Lumio Pulse — Refonte UX/UI de l'application wearable stress management · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack
//  ⚠️  Remplacer les [À COMPLÉTER] par le contenu narratif réel du bloc.
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Théo Marczak (CEO, Lumio Health)",
      "fromEmail": "theo.marczak@lumio-health.com",
      "subject": "URGENT — Refonte UX Lumio Pulse avant revue Northgate : brief officiel",
      "date": "14 mars 2025",
      "preview": "67 % d'abandon, NPS -12 : Théo mandate une refonte UX complète de Lumio Pulse avant la revue Northgate du 30 avril.",
      "body": "Équipe,\n\nJe vais aller droit au but : les résultats de la bêta Lumio Pulse sont mauvais. Pas décevants — mauvais.\n\n67 % d'abandon à l'onboarding. NPS à -12. Des dashboards biométriques que nos propres utilisateurs B2B qualifient d'illisibles. On a mis 18 mois à construire cette app, et en l'état, elle fait fuir les gens avant même qu'ils aient vu ce qu'elle vaut.\n\nJakob Rein a la revue de financement fixée au 30 avril. Northgate co-finance notre expansion européenne et il attend une démonstration concrète d'amélioration UX — pas une promesse, pas un deck PowerPoint avec de belles intentions. Des preuves. Des chiffres. Une interface qui fonctionne.\n\nJe vous mandate officiellement pour produire une proposition complète d'optimisation UX/UI de Lumio Pulse : analyse des comportements utilisateurs, identification des points de blocage, prototypes itératifs testés, et KPI mesurables qui nous permettront de montrer à Northgate que la trajectoire est inversée.\n\nOn a jusqu'au 30 avril. Ce n'est pas long. Je compte sur vous pour traiter ce sujet avec la rigueur et la rapidité qu'il exige.\n\nToutes les données analytics bêta sont disponibles auprès de Sonia. Ne perdez pas de temps.\n\nThéo Marczak\nCEO, Lumio Health\nt.marczak@lumio-health.com",
      "avatar": "TM",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-07",
      "from": "Jakob Rein (Directeur, Northgate Fund)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "Revue du 30 avril — Attentes Northgate : livrables UX, KPI et démonstration prototype V2",
      "date": "14 mars 2025",
      "preview": "Jakob Rein fixe trois livrables non négociables pour le 30 avril : KPI comparatif, démo live V2 et rapport RGAA.",
      "body": "Théo,\n\nSuite à notre appel du 11 mars, je souhaite formaliser par écrit ce que Northgate attend de votre équipe pour la revue du 30 avril. Soyons clairs sur le périmètre, car j'ai l'impression que nous n'en avons pas la même lecture.\n\nNous n'attendons pas une présentation de roadmap ni un récit de transformation. Nous attendons trois livrables concrets, non négociables :\n\n1. Un tableau de bord KPI comparatif avant/après refonte — taux de complétion onboarding, NPS, temps moyen sur les dashboards biométriques, taux d'abandon à J+7. Les chiffres bêta sont connus : -12 de NPS, 67 % d'abandon. Montrez-nous où vous en êtes au 28 avril au plus tard.\n\n2. Une démonstration live du prototype V2 final — pas de slides, pas de vidéo préenregistrée. Le prototype tourne, on l'utilise en séance. Vos testeurs utilisateurs doivent avoir validé au minimum deux cycles d'itération documentés.\n\n3. Un rapport d'accessibilité RGAA — critères couverts, niveaux atteints, points non conformes identifiés avec plan de correction daté. L'accessibilité n'est pas optionnelle dans un contexte d'expansion européenne.\n\nCes livrables seront transmis à notre comité technique 48h avant la réunion, soit le 28 avril avant 18h. Tout document arrivant après ce délai ne sera pas intégré à l'évaluation.\n\nJe vous dis cela directement parce que le financement de la phase 2 se joue ici. L'enthousiasme ne suffira pas.\n\nCordialement,\n\nJakob Rein\nDirecteur — Northgate Capital\njakob.rein@northgate-capital.eu | +33 1 44 XX XX XX",
      "avatar": "JR",
      "avatarColor": "#134547",
      "unread": false,
      "flagged": false
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "RAPPORT",
      "title": "Rapport analytics Lumio Pulse Bêta — Février 2025",
      "accent": "#1b4f8a",
      "runningHead": "RAPPORT ANALYTICS",
      "pages": [
        {
          "kicker": "DONNÉES BÊTA · USAGE INTERNE",
          "title": "Comportements utilisateurs et points de chute — Lumio Pulse v2.0",
          "byline": "Yassine Morel, Content & Data · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce rapport consolide les données comportementales collectées sur la période bêta de Lumio Pulse v2.0, du 3 au 28 février 2025. Périmètre : 412 utilisateurs actifs recrutés parmi les salariés de 11 clients B2B pilotes. Outil de collecte : Mixpanel (événements in-app) + enregistrements de sessions via Hotjar (échantillon de 180 sessions). Les résultats ci-dessous alimentent directement la phase de recherche utilisateurs engagée par l'équipe produit en vue de la refonte UX/UI."
            },
            {
              "type": "h2",
              "text": "Funnel d'onboarding : taux de chute par étape"
            },
            {
              "type": "p",
              "text": "Le funnel d'onboarding comporte 6 étapes séquentielles. Sur les 412 utilisateurs ayant lancé l'application pour la première fois, voici la progression mesurée : Étape 1 — Écran de bienvenue / connexion compte : 412 utilisateurs (100 %). Étape 2 — Appairage Bluetooth du bracelet : 341 utilisateurs (82,8 % — chute de 17,2 %). Étape 3 — Autorisation des notifications : 274 utilisateurs (66,5 % — chute de 19,6 %). Étape 4 — Paramétrage du profil biométrique : 178 utilisateurs (43,2 % — chute de 35,0 %, pic de friction). Étape 5 — Tutoriel du dashboard stress : 152 utilisateurs (36,9 %). Étape 6 — Première mesure complétée : 136 utilisateurs (33,0 %). Taux d'abandon global onboarding : 67 %, cohérent avec les remontées terrain de Camille. L'étape 4 concentre à elle seule 35 % d'abandon sur une seule transition — signalée comme priorité critique."
            },
            {
              "type": "callout",
              "text": "⚠ Point de chute critique — Étape 4 (paramétrage biométrique) : 35 % des utilisateurs quittent l'application à ce stade. Les enregistrements Hotjar révèlent une accumulation de 7 champs obligatoires sur un seul écran, sans indication de progression ni possibilité de saisie différée. Durée médiane sur cet écran avant abandon : 48 secondes."
            },
            {
              "type": "h2",
              "text": "Temps moyen par écran et taux d'erreur — module respiration guidée"
            },
            {
              "type": "p",
              "text": "Analyse des temps médians de consultation par écran principal (utilisateurs ayant passé l'onboarding, n=136) : Dashboard biométrique principal — 22 secondes (norme cible : 45 s minimum pour une lecture utile). Détail fréquence cardiaque variabilité (HRV) — 9 secondes (écran jugé 'illisible' dans 61 % des verbatims recueillis via la micro-enquête in-app). Module respiration guidée — 37 secondes de temps médian, mais taux d'erreur de 43 % sur le déclenchement de la séance : les utilisateurs appuient sur l'icône d'information au lieu du bouton 'Démarrer', signalant une confusion de hiérarchie visuelle. Historique hebdomadaire stress — 14 secondes. Ces données suggèrent que la densité d'information du dashboard et l'absence de hiérarchie claire sur le module respiration constituent les deux axes de redesign prioritaires après l'onboarding."
            },
            {
              "type": "callout",
              "text": "📊 NPS global bêta (février 2025) : -12. Principaux verbatims négatifs récurrents (sur 89 réponses collectées) : 'Je ne comprends pas ce que les chiffres veulent dire' (38 occurrences), 'Trop compliqué pour commencer' (27 occurrences), 'J'ai abandonné avant de voir mon niveau de stress' (21 occurrences). Aucun verbatim ne mentionne la précision des capteurs comme problème — le hardware n'est pas en cause."
            },
            {
              "type": "h2",
              "text": "Synthèse des heatmaps Hotjar (écrans dashboard)"
            },
            {
              "type": "p",
              "text": "Les heatmaps de clics sur le dashboard principal (180 sessions analysées) révèlent trois comportements anormaux : (1) 58 % des clics se concentrent sur la zone de titre de la carte HRV, non interactive, indiquant une attente de drill-down non satisfaite. (2) Le bouton 'Exporter mes données', positionné en bas de page, génère 0 % de clics — invisibilité confirmée. (3) La navigation par onglets (Aujourd'hui / Semaine / Mois) est ignorée par 71 % des sessions : les utilisateurs ne découvrent pas la profondeur temporelle des données. Ces comportements pointent vers une architecture d'information à retravailler en profondeur, notamment la distinction entre éléments interactifs et éléments d'affichage."
            },
            {
              "type": "p",
              "text": "Note de transmission : Ce rapport est transmis à Sonia Ferracci et à l'équipe produit pour intégration dans la phase de research UX. Les fichiers bruts Mixpanel (export CSV, 14 Mo) et les enregistrements Hotjar sélectionnés (18 sessions annotées) sont accessibles sur le Drive projet Lumio Pulse v2.0 / dossier 'Bêta Data — Fév. 2025'. Toute question sur la méthodologie de collecte peut être adressée directement. — Y.M."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-05",
      "type": "rich",
      "tab": "COMPTE-R",
      "title": "CR — Réunion de lancement design sprint Lumio Pulse V2 — 14 mars 2025",
      "accent": "#5b3a8a",
      "runningHead": "COMPTE-RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "COMPTE-RENDU INTERNE — CONFIDENTIEL",
          "title": "Lancement design sprint Lumio Pulse V2",
          "byline": "Théo Marczak, CEO · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion tenue le 14 mars 2025 de 9h00 à 10h30, salle Sirius (Paris 11e). Présents : Théo Marczak (CEO), Sonia Ferracci (Marketing), Camille Ott (Partenariats B2B), Yassine Morel (Content), Romain Szabo (Lead Dev mobile — invité ponctuel). Objet : cadrer le périmètre, les contraintes techniques et le calendrier du sprint de refonte UX/UI de l'application Lumio Pulse, en vue de la revue Northgate fixée au 30 avril 2025."
            },
            {
              "type": "h2",
              "text": "Périmètre des écrans à refondre"
            },
            {
              "type": "p",
              "text": "Trois zones prioritaires ont été validées à l'unanimité, sur la base des retours bêta (NPS : -12, taux d'abandon onboarding : 67 %). 1 — Onboarding en 4 étapes : réduction de la friction, reformulation des permissions capteur, micro-interactions de progression. 2 — Dashboard stress : refonte complète de la lisibilité biométrique, hiérarchisation des données (score global / tendance 7 jours / pic journalier), abandon des graphiques superposés illisibles signalés par 43 % des testeurs. 3 — Module alertes : clarification des seuils, ton éditorial à retravailler avec Yassine pour éviter l'effet anxiogène documenté dans les verbatims bêta."
            },
            {
              "type": "callout",
              "text": "Décision actée : tout écran hors de ces 3 périmètres est gelé jusqu'au 30 avril. Aucun ajout de feature pendant le sprint."
            },
            {
              "type": "h2",
              "text": "Contraintes techniques — apport équipe dev"
            },
            {
              "type": "p",
              "text": "Romain Szabo a transmis les contraintes non négociables à intégrer dès la phase de maquettage. Framework : React Native 0.73 (iOS + Android). Les design tokens existants (couleurs, typographie, espacements) sont documentés dans Figma sous le projet 'Lumio DS v1.4' — leur usage est obligatoire pour maintenir la cohérence et réduire le temps d'intégration. Les composants natifs accessibles (rôles ARIA, tailles de cible minimales 44×44 px) doivent être respectés dès le prototype. Contrainte de performance : les écrans du dashboard ne doivent pas dépasser 2 appels API simultanés au chargement. Les spécifications design devront être livrées en mode 'Dev Mode Figma' avec annotations d'états (default, hover, error, empty state)."
            },
            {
              "type": "callout",
              "text": "Point de vigilance : Yassine assure la cohérence éditoriale des libellés sur l'ensemble des 3 périmètres. Charge à surveiller — prévoir un point individuel avec lui d'ici le 17 mars."
            },
            {
              "type": "h2",
              "text": "Calendrier de livraison"
            },
            {
              "type": "p",
              "text": "17 mars : validation des wireframes basse fidélité (onboarding + dashboard). 21 mars : prototype Figma moyenne fidélité soumis aux tests utilisateurs internes (panel de 8 utilisateurs B2B volontaires). 28 mars : intégration des retours tests, livraison des spécifications Dev Mode à Romain. 4 avril : revue de conformité design/développement, première build testable. 14 avril : tests d'accessibilité (RGAA 4.1, lecteur d'écran, contrastes AA minimum). 25 avril : livraison finale des assets et rapport KPI de référence à destination de Jakob Rein. 30 avril : présentation Northgate."
            },
            {
              "type": "callout",
              "text": "Prochaine réunion de suivi sprint : mardi 18 mars à 9h30. Chaque responsable de périmètre prépare un point d'avancement de 5 minutes maximum. Pas de slides — on travaille sur les maquettes directement."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "RAPPORT",
      "title": "Résultats tests utilisateurs — Prototypes Lumio Pulse V2.0 — Session du 25 mars 2025",
      "accent": "#7a756c",
      "runningHead": "RAPPORT DE TEST UTILISAT",
      "pages": [
        {
          "kicker": "RAPPORT DE TEST UTILISATEUR — CONFIDENTIEL",
          "title": "Lumio Pulse V2.0 : premiers enseignements terrain",
          "byline": "Yassine Morel, Content & Data · 25 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce rapport restitue les résultats de la première session de tests utilisateurs menée sur les prototypes Figma V2.0 de l'application Lumio Pulse. Session organisée le 25 mars 2025 en présentiel (locaux Lumio, Paris 11e), durée totale : 3h10. Participants : 8 testeurs recrutés parmi des salariés de clients B2B actifs (secteurs : assurance, logistique, conseil). Profils : 5 femmes / 3 hommes, 27–51 ans, tous porteurs du bracelet capteur depuis au moins 30 jours. Aucun testeur n'avait participé à la bêta V1.5. Animation : Yassine Morel, observation silencieuse : Sonia Ferracci."
            },
            {
              "type": "h2",
              "text": "Protocole : 3 scénarios structurés"
            },
            {
              "type": "p",
              "text": "Scénario 1 — Onboarding : connexion du bracelet, création de profil, découverte du dashboard principal. Scénario 2 — Lecture biométrique : interprétation du graphique HRV (variabilité cardiaque) sur 7 jours glissants. Scénario 3 — Activation d'une session de respiration guidée via swipe depuis l'écran d'accueil. Chaque scénario était chronométré et suivi d'une micro-interview à chaud (3 questions ouvertes). Les interactions ont été enregistrées via Maze (clickmaps + heatmaps), complétées par prise de notes manuscrites en observation directe."
            },
            {
              "type": "h2",
              "text": "Points de blocage identifiés"
            },
            {
              "type": "p",
              "text": "Blocage 1 — Graphique HRV (Scénario 2) : 6 testeurs sur 8 n'ont pas compris la représentation en courbe bicolore du score HRV. Verbatim récurrent : « Je ne sais pas si c'est bon ou mauvais pour moi. » L'absence de valeur de référence personnalisée et le libellé technique « HRV ms RMSSD » ont été cités comme causes principales. Taux de réussite de la tâche : 25 % (2/8). Temps moyen avant abandon de lecture : 14 secondes. Blocage 2 — Swipe d'activation (Scénario 3) : 5 testeurs sur 8 ont tenté un tap là où un swipe vers le haut était attendu. Le pictogramme directionnel (flèche outline, 18px) n'a pas été détecté comme affordance interactive. Taux d'erreur initial : 62 %. Après découverte accidentelle du geste, 4 testeurs sur 5 ont exprimé une frustration explicite (« c'est caché »)."
            },
            {
              "type": "callout",
              "text": "KPI critiques à date · Taux de complétion onboarding (scénario 1) : 75 % — en amélioration vs bêta (33 %), mais encore en dessous de la cible V2.0 fixée à 85 %. · Score de clarté dashboard HRV : 2,1/5 (évaluation post-scénario). · Taux d'erreur gestuelle swipe : 62 % à la première interaction. · NPS de session (ressenti global prototype) : +8 — signal positif à consolider."
            },
            {
              "type": "h2",
              "text": "Axes d'itération recommandés"
            },
            {
              "type": "p",
              "text": "Sur le graphique HRV : introduire une zone de référence colorée personnalisée (vert/orange/rouge) basée sur la baseline individuelle de l'utilisateur, remplacer le libellé technique par une formulation plain language (ex. : « Récupération du système nerveux »), et ajouter une infobulle contextuelle accessible au tap. Sur le swipe d'activation : remplacer le pictogramme statique par une micro-animation de pulsation (loop 2s) signalant l'interactivité, et élargir la zone de détection tactile à 44px minimum (conformité WCAG 2.5.5). Ces deux correctifs sont estimés réalisables en moins de 3 jours de design actif selon Sonia Ferracci."
            },
            {
              "type": "h2",
              "text": "Point de tension : délai de livraison des maquettes corrigées"
            },
            {
              "type": "p",
              "text": "La revue de financement Northgate est fixée au 30 avril. Pour intégrer un second cycle de tests avant cette date, les maquettes corrigées doivent être livrées au plus tard le 2 avril, soit dans 8 jours calendaires. À ce stade, la charge de révision repose intégralement sur un designer unique (ressource externe, disponibilité à confirmer avant le 27 mars). En l'absence de confirmation de disponibilité d'ici jeudi 27 mars au soir, le planning bascule en zone de risque. Je recommande à Théo de trancher rapidement sur l'arbitrage : prioriser les deux correctifs critiques identifiés ci-dessus et geler les évolutions cosmétiques prévues (refonte palette couleurs, animations d'écran de chargement) pour tenir le délai."
            },
            {
              "type": "callout",
              "text": "Action requise avant le 27 mars · Théo Marczak : confirmer la disponibilité du designer externe ou identifier une ressource de secours. · Sonia Ferracci : valider la priorisation des 2 correctifs UX vs le périmètre cosmétique. · Yassine Morel : préparer le guide de test V2.1 dès réception des maquettes corrigées. Sans feu vert d'ici jeudi soir, la fenêtre pour un second cycle de tests avant le 30 avril se ferme."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-08",
      "type": "rich",
      "tab": "TABLEAU",
      "title": "Dashboard KPI UX Lumio Pulse — Semaine 13 — Comparatif V1 / V2",
      "accent": "#1b4f8a",
      "runningHead": "TABLEAU DE BORD KPI",
      "pages": [
        {
          "kicker": "TABLEAU DE BORD KPI UX — USAGE INTERNE",
          "title": "Lumio Pulse V2 : premiers résultats post-déploiement partiel",
          "byline": "Sonia Ferracci, Directrice Marketing · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce tableau de bord centralise les indicateurs de performance UX mesurés sur la semaine 13 (10–14 mars 2025), à l'issue du déploiement partiel de Lumio Pulse V2 auprès d'un panel de 420 utilisateurs actifs issus de 18 clients B2B pilotes. Les données sont comparées aux mesures de référence V1 établies en phase bêta (janvier–février 2025). L'objectif est de disposer d'une base factuelle solide avant la revue Northgate du 30 avril."
            },
            {
              "type": "h2",
              "text": "Indicateurs clés — Comparatif V1 / V2"
            },
            {
              "type": "p",
              "text": "• Taux de complétion onboarding : V1 = 33 % → V2 = 71 % (+38 points). Mesure : sessions complétées / sessions initiées, sur 420 utilisateurs, 7 jours glissants. Source : Mixpanel.\n• NPS (Net Promoter Score) : V1 = -12 → V2 = +18 (+30 points). Mesure : enquête in-app post-onboarding, n = 214 répondants. Seuil cible fixé à +20 d'ici le 30 avril.\n• Temps moyen d'interprétation du dashboard biométrique : V1 = 47 s → V2 = 29 s (-38 %). Mesure : eye-tracking + session replay (Hotjar), tâche standardisée de lecture du score de stress journalier.\n• Taux d'abandon à l'étape 3 de l'onboarding (autorisation capteur) : V1 = 41 % → V2 = 19 % (-22 points). Amélioration attribuée à la refonte du microcopy et à l'ajout d'une illustration contextuelle.\n• Score d'accessibilité WCAG 2.1 AA : V1 = 61 % de conformité → V2 = 94 % de conformité. Audit réalisé par l'équipe design le 11 mars 2025 via axe DevTools."
            },
            {
              "type": "callout",
              "text": "✅ Signal fort : le NPS passe en territoire positif pour la première fois depuis le lancement de l'application. À +18, il reste à 2 points de l'objectif cible (+20) fixé pour la revue Northgate. Un second sprint de corrections micro-UX est programmé du 17 au 21 mars pour adresser les 6 % de non-conformité accessibilité restants et tenter de franchir ce seuil."
            },
            {
              "type": "h2",
              "text": "Points de vigilance et actions en cours"
            },
            {
              "type": "p",
              "text": "Deux indicateurs restent sous surveillance. Premièrement, le taux de rétention J+7 (utilisateurs ayant rouvert l'application 7 jours après onboarding) s'établit à 44 % en V2, contre 38 % en V1 : la progression est réelle mais insuffisante au regard de l'objectif de 55 % fixé en interne. Une hypothèse de travail est en cours d'investigation : les notifications de rappel quotidien restent perçues comme intrusives (mentionnées dans 23 % des verbatims négatifs NPS). Deuxièmement, le temps de chargement moyen du dashboard sur Android mid-range dépasse encore 3,2 secondes, au-delà du seuil de 2,5 s recommandé. Ce point a été transmis à l'équipe développement le 13 mars avec priorisation haute."
            },
            {
              "type": "callout",
              "text": "📅 Prochaine échéance : restitution complète aux parties prenantes (Théo Marczak, Jakob Rein — Northgate Capital) prévue le 28 mars 2025. Ce dashboard sera intégré au rapport d'avancement UX Lumio Pulse V2 et présenté en support de la démonstration prototype interactive."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-03",
      "title": "Synthèse verbatims bêta-testeurs — Lumio Pulse v2.0",
      "date": "14 mars 2025",
      "preview": "12 bêta-testeurs expriment frustration et incompréhension face au dashboard et à l'activation — points critiques identifiés.",
      "kicker": "RESEARCH QUALI — CONFIDENTIEL INTERNE",
      "render": "plain",
      "body": "Période de collecte : 3–11 mars 2025. 12 entretiens conduits (4 responsables RH, 5 salariés en télétravail, 3 managers opérationnels). Durée moyenne : 28 min. Recrutement via panel clients B2B existants (6 entreprises, secteurs tech et services).\n\n— « Je n'ai jamais compris ce que voulait dire la zone rouge sur le cercle. Personne ne m'a expliqué si c'était grave ou normal. » — RH, 34 ans, Lyon.\n— « L'activation du bracelet m'a pris 25 minutes. J'ai failli abandonner au moment du couplage Bluetooth. » — Manager, 41 ans, Paris.\n— « Les chiffres changent toutes les secondes, ça m'angoisse plus que ça m'aide. » — Salarié télétravail, 29 ans, Bordeaux.\n— « Je ne sais pas ce qu'on attend de moi sur l'écran d'accueil. Il y a trop d'informations en même temps. » — RH, 47 ans, Nantes.\n— « Le texte est trop petit. Sur mon téléphone Android je dois zoomer à chaque fois. » — Manager, 53 ans, Strasbourg.\n— « J'ai cru que l'appli était cassée parce que le score ne bougeait pas. En fait il fallait attendre 10 minutes. Aucun message ne l'indiquait. » — Salarié télétravail, 36 ans, Lille.\n— « Les couleurs du dashboard ressemblent à une alerte permanente. Je l'ai désinstallée au bout de trois jours. » — Salarié télétravail, 31 ans, Rennes.\n— « Je voulais exporter mes données pour les montrer à mon médecin. Impossible de trouver comment faire. » — RH, 39 ans, Toulouse.\n— « L'onboarding pose des questions très personnelles dès la première ouverture. Ça m'a mis mal à l'aise, j'ai tout sauté. » — Manager, 44 ans, Marseille.\n— « Il n'y a aucun retour quand je valide une action. Je recommençais les mêmes gestes sans savoir si ça marchait. » — Salarié télétravail, 27 ans, Paris.\n— « Le mode sombre n'existe pas. En réunion le soir, l'écran est aveuglant. » — Manager, 38 ans, Lyon.\n— « Je suis daltonienne. Les indicateurs rouge/vert ne me disent rien sans légende texte. » — RH, 45 ans, Paris.\n\nPoints critiques convergents (≥6 mentions) : surcharge informationnelle du dashboard, opacité du parcours d'activation, absence de feedback système. Points secondaires (2–3 mentions) : export données, confidentialité perçue, mode sombre. Signal accessibilité isolé mais bloquant (daltonisme, taille typographique).",
      "byline": "Sonia Ferracci (Directrice Marketing, Lumio Health) · 14 mars 2025"
    },
    {
      "id": "DOC-04",
      "title": "Exigences B2B pour Lumio Pulse V2 — Accessibilité et conformité RGPD",
      "date": "14 mars 2025",
      "preview": "Trois comptes majeurs conditionnent leur renouvellement à la conformité RGAA AA et RGPD de Lumio Pulse V2.",
      "kicker": "NOTE INTERNE CONFIDENTIELLE",
      "render": "plain",
      "body": "Suite aux échanges tenus cette semaine avec trois de nos plus gros comptes — Malakoff Humanis, Harmonie Mutuelle et le groupe Ramsay Santé — je remonte plusieurs exigences non négociables pour la V2 de Lumio Pulse.\n\nPremier point : conformité RGAA niveau AA obligatoire. Ces clients opèrent dans des secteurs sous obligation légale d'accessibilité numérique. Deux d'entre eux ont explicitement mentionné que l'absence de conformité RGAA bloquerait le renouvellement de contrat prévu en juin 2025. Ce n'est pas une option, c'est un critère de sélection.\n\nDeuxième point : les dashboards biométriques doivent être lisibles par des utilisateurs présentant des déficiences visuelles (daltonisme, basse vision). Les palettes actuelles rouge/vert pour les niveaux de stress sont signalées comme inutilisables par plusieurs référents RH qui gèrent des collaborateurs RQTH. Je pense notamment à ce que vit Yassine en interne — c'est un signal concret, pas théorique.\n\nTroisième point : RGPD. Malakoff Humanis exige une documentation DPA (Data Processing Agreement) mise à jour, compatible avec l'architecture de la V2. Leur DPO a demandé une cartographie des flux de données biométriques avant tout déploiement.\n\nDemande concrète : intégrer des profils utilisateurs en situation de handicap (déficience visuelle, motrice, cognitive légère) dans les panels de test utilisateurs dès la phase bêta. Sans cela, nos engagements contractuels avec ces comptes seront intenables. Je reste disponible pour un point avec Sonia et l'équipe design avant le 21 mars.",
      "byline": "Camille Ott (Responsable B2B, Lumio Health) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Concevoir et optimiser le design et l'expérience utilisateur des interfaces digitales au service d'un commanditaire",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "C.22-II — Identifier les besoins et les comportements des utilisateurs, en menant des études, des recherches et des tests auprès des utilisateurs, afin de définir les indicateurs de performance à améliorer (KPI).",
        "body": "Appuyez-vous sur les données chiffrées fournies dans les documents fictifs (analytics bêta, verbatims) pour ancrer votre analyse. Un tableau de priorisation MoSCoW ou une matrice impact/fréquence renforcera la crédibilité de votre hiérarchisation des besoins."
      },
      {
        "titre": "C.23-II — Créer des prototypes fonctionnels, en concevant des interfaces utilisateur intuitives et optimisées pour une expérience utilisateur performante et attrayante, et en les testant auprès des utilisateurs, afin d'identifier les axes d'amélioration et les points de blocage utilisateur.",
        "body": "Insérez ou décrivez précisément vos maquettes (écrans clés : onboarding, dashboard stress, notifications). Justifiez vos choix visuels en référence aux principes UX (loi de Hick, affordance, progressive disclosure). Mentionnez explicitement les profils de testeurs pour montrer la représentativité de votre panel."
      },
      {
        "titre": "C.24-II — Optimiser l'expérience utilisateur, en analysant les résultats des tests de maquettes, en ajustant les designs, afin d'améliorer les performances et la satisfaction des utilisateurs.",
        "body": "Structurez cette section en trois temps : résultats bruts des tests → analyse des causes → ajustements apportés. Utilisez un tableau comparatif avant/après pour visualiser les gains. Citez des verbatims utilisateurs pour illustrer les blocages et montrer votre ancrage terrain."
      },
      {
        "titre": "C.25-II — Intégrer les normes d'accessibilité dans la création des interfaces utilisateur, en s'assurant que les produits digitaux sont accessibles à tous les utilisateurs, y compris ceux en situation de handicap, afin d'améliorer l'inclusivité de l'expérience utilisateur.",
        "body": "Référencez explicitement les critères RGAA (ex. : critère 3.2 sur le contraste, critère 12.6 sur la navigation). Mentionnez un outil d'audit (Axe, WAVE, Tanaguru) pour crédibiliser votre démarche. Si des utilisateurs en situation de handicap n'ont pas pu être impliqués, expliquez le plan de remédiation prévu."
      },
      {
        "titre": "C.26-II — Collaborer avec les développeurs, en leur livrant les spécifications design, et en vérifiant le développement du projet terminé, afin d'assurer sa conformité avec le design et les spécifications définies.",
        "body": "Montrez concrètement le processus de handoff (ex. : export Figma avec annotations, design system partagé). Un tableau de suivi des écarts design/développement (avec statut : identifié / en cours / corrigé) démontre la rigueur de votre démarche et votre capacité à piloter la conformité."
      },
      {
        "titre": "C.27-II — Contrôler les indicateurs de performance (KPI) définis pour l'expérience utilisateur, en comparant les performances réelles avec les objectifs établis, et en rapportant les résultats aux parties prenantes, afin de valider l'efficacité des ajustements apportés.",
        "body": "Construisez un tableau KPI structuré (indicateur | baseline | objectif | résultat mesuré | écart | action). Liez explicitement vos recommandations finales aux écarts observés pour montrer une logique d'amélioration continue. Adaptez le niveau de détail du rapport selon l'interlocuteur : synthèse exécutive pour Jakob Rein (investisseur), détail opérationnel pour l'équipe produit."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "URGENT — Refonte UX",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "pdf",
            "name": "Rapport analytics Lumio Pulse",
            "app": "pdf",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "note",
            "name": "Synthèse retours terrain bêta-testeurs",
            "app": "notes",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "note",
            "name": "Exigences clients B2B pour",
            "app": "notes",
            "props": {
              "docId": "DOC-04"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "CR — Réunion de",
            "app": "pdf",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "pdf",
            "name": "Résultats tests utilisateurs —",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Attentes Northgate pour la",
            "app": "mail",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Dashboard KPI UX Lumio",
            "app": "pdf",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      },
      "portraits": {
        "title": "Portraits équipe",
        "sidebar": "Portraits",
        "icon": "🪪",
        "items": [
          {
            "kind": "html",
            "name": "Théo Marczak — CEO",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_theo_marczak.html"
            }
          },
          {
            "kind": "html",
            "name": "Sonia Ferracci — Dir. Marketing",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_sonia_ferracci.html"
            }
          },
          {
            "kind": "html",
            "name": "Camille Ott — Partenariats B2B",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_camille_ott.html"
            }
          },
          {
            "kind": "html",
            "name": "Yassine Morel — Content Manager",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_yassine_morel.html"
            }
          },
          {
            "kind": "html",
            "name": "Jakob Rein — Northgate Capital",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_jakob_rein.html"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte4",
      "acte5",
      "portraits"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Projet Lumio Pulse — Refonte UX/UI de l'application wearable stress management",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
  "items": [
    {
      "name": "planning_v0.mpp",
      "icon": "📊",
      "size": "980 Ko",
      "date": "sept.",
      "isEgg": false
    },
    {
      "name": "notes_perso.txt",
      "icon": "📄",
      "size": "4 Ko",
      "date": "sept.",
      "isEgg": false
    },
    {
      "name": "Capture WhatsApp — Camille.png",
      "icon": "🖼",
      "size": "210 Ko",
      "date": "V2",
      "isEgg": true
    }
  ],
  "egg": {
    "contact": "Camille Ott",
    "status": "vu à 23:40",
    "meKey": "sonia",
    "badge": "Conversation non destinée au dossier",
    "messages": [
      {
        "from": "sonia",
        "text": "Camille, entre nous — Jakob a demandé à Théo de couper le module accessibilité de la V2 pour tenir le délai",
        "time": "23:18"
      },
      {
        "from": "sonia",
        "text": "Théo hésite. Si ça passe, on présente au jury une interface non-conforme RGAA. Devant des clients B2B qui ont signé sur cette promesse",
        "time": "23:19"
      },
      {
        "from": "camille",
        "text": "j'ai trois contrats mutuelles qui tombent si on n'est pas conformes",
        "time": "23:24"
      },
      {
        "from": "camille",
        "text": "dis à Théo que je démissionne avant de signer ce livrable",
        "time": "23:25"
      },
      {
        "from": "camille",
        "text": "et les apprenants doivent le savoir. leur proposition doit défendre l'accessibilité coûte que coûte dans la présentation orale",
        "time": "23:26"
      },
      {
        "from": "sonia",
        "text": "On est d'accord. Je ne livre pas une V2 qui sacrifie l'accessibilité. Je le porterai au board s'il le faut.",
        "time": "23:31"
      }
    ]
  }
},
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bc4-ii",
        "name": "projet-bc4-ii"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Théo Marczak",
        "avatar": "TM",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:47",
          "text": "{{PRENOM}} — bienvenue sur le projet Lumio Pulse 2.0, tu vas bosser directement avec moi sur la refonte UX de l'appli"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:51",
          "text": "le contexte est simple : 67 % d'abandon à l'onboarding, NPS à -12, et Jakob Rein veut voir quelque chose de concret avant le 30 avril — donc on n'a pas de marge"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:54",
          "text": "ce que j'attends de toi d'ici la fin de la session : une analyse des points de friction utilisateur, au moins un prototype itératif commenté, et un set de KPI qu'on pourra défendre devant Northgate — clair ?"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Projet Lumio Pulse — Refonte UX/UI de l'application wearable stress management\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/applications-sante-connectee-onboarding-medtech-europe-2025",
      "author": "Mathilde Corvec",
      "date": "2025-03-06",
      "headline": "Applications de santé connectée : l'onboarding, talon d'Achille des medtechs européennes",
      "lede": "Les wearables santé séduisent les directions RH, mais leurs applications compagnons peinent à retenir les utilisateurs au-delà des premières minutes. Un décrochage précoce qui fragilise la promesse clinique et inquiète les investisseurs.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "Selon une étude publiée en février 2025 par le cabinet Verdant Analytics, 62 % des utilisateurs d'applications de santé connectée abandonnent le parcours d'onboarding avant d'avoir complété leur premier profil biométrique. Un chiffre qui grimpe à 71 % lorsque l'application impose la lecture d'un dashboard de données physiologiques dès la première session.\n\nCe phénomène, désormais documenté sous le terme de « friction cognitive initiale », touche en priorité les acteurs du segment stress et bien-être au travail. Les interfaces héritées des premières versions, conçues pour des profils médical ou RH aguerris, se révèlent inadaptées au grand public comme aux salariés non-initiés que les entreprises clientes cherchent à embarquer.\n\n« Le problème n'est pas le capteur, il est l'écran », résume Anouk Delplanque, UX researcher chez le studio Tangram Health, qui accompagne plusieurs medtechs françaises. « Les équipes produit sous-estiment systématiquement le coût cognitif d'un graphique de variabilité cardiaque affiché sans contexte ni pédagogie. »\n\nLes conséquences dépassent la simple métrique d'usage. Dans un secteur où les levées de fonds sont conditionnées à des preuves d'engagement utilisateur, un NPS négatif ou un taux de rétention inférieur à 40 % à J+7 peut suffire à retarder un tour de table. Plusieurs fonds spécialisés en santé numérique auraient d'ores et déjà intégré des seuils UX contractuels dans leurs term sheets, selon nos informations.\n\nLa réglementation pousse également les acteurs à agir. Le règlement européen sur les dispositifs médicaux (MDR 2017/745) et les recommandations RGAA en matière d'accessibilité numérique imposent une mise à niveau des interfaces, sous peine d'exclusion des marchés publics hospitaliers et des appels d'offres entreprises les plus exigeants.\n\nFace à cette pression convergente, plusieurs startups ont engagé des refontes profondes de leur couche UX/UI, s'appuyant sur des cycles de tests utilisateurs itératifs et des protocoles inspirés du Design Thinking. L'enjeu : transformer un tableau de bord technique en interface conversationnelle, capable de guider un utilisateur stressé sans l'écraser d'indicateurs.\n\n« Nous voyons arriver des briefs de refonte toutes les semaines depuis le début de l'année », confirme Delplanque. « Les équipes qui avaient priorisé la feature velocity sur l'expérience paient maintenant la facture. »\n\nLe marché du wearable santé B2B en Europe devrait atteindre 4,2 milliards d'euros d'ici 2027, selon les projections d'IDC. Mais les analystes s'accordent sur un point : sans une expérience utilisateur radicalement simplifiée, la promesse de prévention des risques psychosociaux portée par ces objets connectés restera lettre morte dans les plans de santé au travail des grandes entreprises."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Santé & Technologie",
    "kicker": "Medtech sous tension",
    "date": "14 mars 2025",
    "headline": "Les applis santé perdent leurs utilisateurs avant même de les soigner",
    "chapeau": "Une étude du cabinet Forrester publiée ce jeudi révèle que 71 % des applications wearables de bien-être enregistrent un abandon utilisateur dans les 72 heures suivant l'installation. Le phénomène frappe de plein fouet les start-ups françaises qui misent sur ces interfaces pour justifier leurs levées de fonds auprès d'investisseurs de plus en plus impatients.",
    "body": "Le marché des wearables de santé pèse désormais 4,2 milliards d'euros en Europe, mais la promesse technologique se heurte à un mur : celle de l'expérience utilisateur. Selon Forrester, les interfaces jugées \"trop complexes\" ou \"illisibles\" sont citées dans 64 % des désinstallations précoces. Les utilisateurs, souvent non initiés aux données biométriques, abandonnent face à des dashboards surchargés qu'ils ne comprennent pas. Ce constat alarmant intervient alors que plusieurs fonds d'investissement spécialisés dans la healthtech indiquent revoir leurs critères d'évaluation : la rétention applicative devient un indicateur de due diligence au même titre que le chiffre d'affaires. \"Un produit hardware sans expérience digitale cohérente n'est plus finançable\", tranche un partner d'un fonds européen contacté par Les Échos, sous couvert d'anonymat. Pour les jeunes pousses qui s'apprêtent à défendre leur bilan devant leurs actionnaires ce printemps, le message est sans ambiguïté : soigner l'interface ou disparaître."
  }
};

window.PAC_CONFIG = {
  "bloc": "bc4-ii",
  accroche_namescreen: {
    "subtitle": "Design & expérience utilisateur (UX/UI)",
    "role": "consultant·e UX/UI",
    "intro": "Tu es {{STUDENT}}, consultant·e UX/UI chez Lumio Health pour la refonte de l'application wearable de gestion du stress (Projet Lumio Pulse). Études utilisateurs, prototypage, optimisation UX, normes d'accessibilité, collaboration développeurs, KPI : tu produis la proposition d'optimisation du design et de l'expérience utilisateur (E4-II).",
    "ratio_label": "3 semaines dans la vraie vie",
    "regles": [
      {
        "ico": "📄",
        "txt": "Tout ce que tu sais, c'est dans les documents UX et les retours utilisateurs du poste de mission."
      },
      {
        "ico": "🤐",
        "txt": "Le jury évalue tes prototypes, l'optimisation UX mesurée et le respect des normes d'accessibilité."
      },
      {
        "ico": "💬",
        "txt": "Quand tu as une piste UX solide → Slack → ton commanditaire. Sa réaction débloque la suite."
      }
    ]
  },
  "titre": "Concevoir et optimiser le design et l'expérience utilisateur des interfaces digitales au service d'un commanditaire",
  "epreuve": "E4-II. Proposition d'optimisation du design et de l'expérience utilisateur (UX/UI)",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "accroche": "Tu es mandaté·e par <strong>Théo Marczak, CEO de Lumio Health</strong>, pour concevoir l'optimisation UX/UI de l'application <em>Lumio Pulse</em> — le wearable de gestion du stress en entreprise. Recherche utilisateur, prototypes fonctionnels, tests, accessibilité RGAA, collaboration avec les développeurs&nbsp;: chaque choix de design engage la crédibilité du produit face aux clients B2B et à Northgate Capital. Les utilisateurs ont des besoins critiques que les interfaces actuelles ne couvrent pas. <em>Le design n'est pas de la décoration. C'est la décision.</em>",
  "note_reflexive": false,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "C.22-II",
      "label": "Identifier les besoins et les comportements des utilisateurs, en menant des études, des recherches et des tests auprès des utilisateurs, afin de définir les indicateurs de performance à améliorer (KPI).",
      "libelle": "Identifier les",
      "rncp": "Identifier les besoins et les comportements des utilisateurs, en menant des études, des recherches et des tests auprès des utilisateurs, afin de définir les indicateurs de performance à améliorer (KPI).",
      "placeholder": "Décrivez ici les méthodologies de recherche utilisateurs que vous avez mobilisées (interviews, enquêtes, heatmaps, sessions d'observation…) pour analyser les comportements sur Lumio Pulse. Précisez comment vous avez hiérarchisé les besoins critiques (ex. : abandon onboarding) vs secondaires, et listez les KPI retenus (taux de complétion onboarding, NPS, temps moyen sur dashboard, taux d'erreur interaction) en justifiant chaque choix au regard des données collectées.",
      "min": 220,
      "motsCles": [
        "persona",
        "user research",
        "interview utilisateur",
        "enquête",
        "heatmap",
        "NPS",
        "taux d'abandon",
        "KPI",
        "besoins critiques",
        "comportements utilisateurs",
        "indicateurs de performance"
      ],
      "conseil": "Appuyez-vous sur les données chiffrées fournies dans les documents fictifs (analytics bêta, verbatims) pour ancrer votre analyse. Un tableau de priorisation MoSCoW ou une matrice impact/fréquence renforcera la crédibilité de votre hiérarchisation des besoins."
    },
    {
      "code": "C.23-II",
      "label": "Créer des prototypes fonctionnels, en concevant des interfaces utilisateur intuitives et optimisées pour une expérience utilisateur performante et attrayante, et en les testant auprès des utilisateurs, afin d'identifier les axes d'amélioration et les points de blocage utilisateur.",
      "libelle": "Créer des",
      "rncp": "Créer des prototypes fonctionnels, en concevant des interfaces utilisateur intuitives et optimisées pour une expérience utilisateur performante et attrayante, et en les testant auprès des utilisateurs, afin d'identifier les axes d'amélioration et les points de blocage utilisateur.",
      "placeholder": "Présentez vos choix de conception pour les maquettes Lumio Pulse V2 : wireframes, zoning, charte graphique, hiérarchie visuelle des données biométriques. Expliquez en quoi chaque décision de design répond à un besoin utilisateur identifié. Décrivez les scénarios d'utilisation construits pour les tests (ex. : scénario 'première connexion', scénario 'lecture alerte stress élevé') et les profils de testeurs sollicités.",
      "min": 220,
      "motsCles": [
        "maquette",
        "wireframe",
        "prototype",
        "Figma",
        "zoning",
        "charte graphique",
        "scénario d'utilisation",
        "test utilisateur",
        "navigation intuitive",
        "hiérarchie visuelle",
        "points de blocage"
      ],
      "conseil": "Insérez ou décrivez précisément vos maquettes (écrans clés : onboarding, dashboard stress, notifications). Justifiez vos choix visuels en référence aux principes UX (loi de Hick, affordance, progressive disclosure). Mentionnez explicitement les profils de testeurs pour montrer la représentativité de votre panel."
    },
    {
      "code": "C.24-II",
      "label": "Optimiser l'expérience utilisateur, en analysant les résultats des tests de maquettes, en ajustant les designs, afin d'améliorer les performances et la satisfaction des utilisateurs.",
      "libelle": "Optimiser l'expérience",
      "rncp": "Optimiser l'expérience utilisateur, en analysant les résultats des tests de maquettes, en ajustant les designs, afin d'améliorer les performances et la satisfaction des utilisateurs.",
      "placeholder": "Restituez les résultats de vos tests utilisateurs sur les prototypes Lumio Pulse V2 : points forts confirmés, points de blocage identifiés (ex. : incompréhension du graphique de variabilité cardiaque, friction sur le module de respiration guidée). Présentez les itérations réalisées (V2.1, V2.2…) en précisant pour chaque ajustement le problème résolu et la mesure d'amélioration observée (ex. : taux de complétion onboarding passé de 33 % à 71 % après refonte du flux).",
      "min": 200,
      "motsCles": [
        "rapport de test",
        "itération",
        "points de blocage",
        "axes d'amélioration",
        "satisfaction utilisateur",
        "taux de complétion",
        "ajustement design",
        "version itérative",
        "mesure d'amélioration",
        "friction"
      ],
      "conseil": "Structurez cette section en trois temps : résultats bruts des tests → analyse des causes → ajustements apportés. Utilisez un tableau comparatif avant/après pour visualiser les gains. Citez des verbatims utilisateurs pour illustrer les blocages et montrer votre ancrage terrain."
    },
    {
      "code": "C.25-II",
      "label": "Intégrer les normes d'accessibilité dans la création des interfaces utilisateur, en s'assurant que les produits digitaux sont accessibles à tous les utilisateurs, y compris ceux en situation de handicap, afin d'améliorer l'inclusivité de l'expérience utilisateur.",
      "libelle": "Intégrer les",
      "rncp": "Intégrer les normes d'accessibilité dans la création des interfaces utilisateur, en s'assurant que les produits digitaux sont accessibles à tous les utilisateurs, y compris ceux en situation de handicap, afin d'améliorer l'inclusivité de l'expérience utilisateur.",
      "placeholder": "Décrivez comment vous avez intégré les critères RGAA (et/ou WCAG 2.1) dans la conception des interfaces Lumio Pulse V2 : contrastes couleurs (ratio minimum 4,5:1), navigation clavier, alternatives textuelles aux pictogrammes biométriques, taille des zones tactiles. Précisez les tests d'accessibilité réalisés (avec quels profils d'utilisateurs en situation de handicap ou via quels outils automatisés) et les ajustements apportés suite aux retours.",
      "min": 180,
      "motsCles": [
        "RGAA",
        "WCAG",
        "accessibilité",
        "contraste",
        "navigation clavier",
        "alternative textuelle",
        "handicap",
        "inclusivité",
        "test d'accessibilité",
        "adaptation",
        "design inclusif"
      ],
      "conseil": "Référencez explicitement les critères RGAA (ex. : critère 3.2 sur le contraste, critère 12.6 sur la navigation). Mentionnez un outil d'audit (Axe, WAVE, Tanaguru) pour crédibiliser votre démarche. Si des utilisateurs en situation de handicap n'ont pas pu être impliqués, expliquez le plan de remédiation prévu."
    },
    {
      "code": "C.26-II",
      "label": "Collaborer avec les développeurs, en leur livrant les spécifications design, et en vérifiant le développement du projet terminé, afin d'assurer sa conformité avec le design et les spécifications définies.",
      "libelle": "Collaborer avec",
      "rncp": "Collaborer avec les développeurs, en leur livrant les spécifications design, et en vérifiant le développement du projet terminé, afin d'assurer sa conformité avec le design et les spécifications définies.",
      "placeholder": "Expliquez comment vous avez organisé la collaboration avec l'équipe technique de Lumio Health : livraison des spécifications design (design tokens, guide de style, annotations Figma), organisation des revues de conformité, protocole de remontée des écarts. Citez au moins un écart constaté entre le design livré et le développement réalisé, et décrivez comment il a été corrigé. Précisez les tests de validation finale réalisés pour comparer le produit développé aux maquettes.",
      "min": 180,
      "motsCles": [
        "spécifications design",
        "design tokens",
        "guide de style",
        "revue de conformité",
        "écart",
        "développeur",
        "handoff",
        "Figma",
        "test de validation",
        "recette",
        "collaboration technique"
      ],
      "conseil": "Montrez concrètement le processus de handoff (ex. : export Figma avec annotations, design system partagé). Un tableau de suivi des écarts design/développement (avec statut : identifié / en cours / corrigé) démontre la rigueur de votre démarche et votre capacité à piloter la conformité."
    },
    {
      "code": "C.27-II",
      "label": "Contrôler les indicateurs de performance (KPI) définis pour l'expérience utilisateur, en comparant les performances réelles avec les objectifs établis, et en rapportant les résultats aux parties prenantes, afin de valider l'efficacité des ajustements apportés.",
      "libelle": "Contrôler les",
      "rncp": "Contrôler les indicateurs de performance (KPI) définis pour l'expérience utilisateur, en comparant les performances réelles avec les objectifs établis, et en rapportant les résultats aux parties prenantes, afin de valider l'efficacité des ajustements apportés.",
      "placeholder": "Présentez le tableau de bord de suivi des KPI UX de Lumio Pulse V2 : pour chaque indicateur défini en C.22-II, indiquez la valeur cible, la valeur mesurée après déploiement, l'écart constaté et l'action corrective associée le cas échéant. Décrivez comment ces résultats ont été communiqués aux parties prenantes (Théo Marczak, Jakob Rein, Sonia Ferracci) : format du rapport, fréquence, recommandations formulées pour la prochaine itération.",
      "min": 200,
      "motsCles": [
        "tableau de bord",
        "KPI",
        "mesure",
        "objectif",
        "valeur cible",
        "performance réelle",
        "écart",
        "action corrective",
        "rapport",
        "parties prenantes",
        "recommandations",
        "optimisation continue"
      ],
      "conseil": "Construisez un tableau KPI structuré (indicateur | baseline | objectif | résultat mesuré | écart | action). Liez explicitement vos recommandations finales aux écarts observés pour montrer une logique d'amélioration continue. Adaptez le niveau de détail du rapport selon l'interlocuteur : synthèse exécutive pour Jakob Rein (investisseur), détail opérationnel pour l'équipe produit."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc4-ii (Manager en stratégie et développement de projet digital).\nContexte : Projet Lumio Pulse — Refonte UX/UI de l'application wearable stress management · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de KPI mesurables et justifiés : toute proposition ne définissant pas au moins trois indicateurs de performance chiffrés, ancrés dans les données utilisateurs collectées, est éliminatoire.\n- Rôles et responsabilités non explicités : le rapport doit identifier clairement qui, dans le groupe, a conduit chaque étape (recherche utilisateurs, prototypage, tests, handoff développeur, pilotage KPI) ; toute production ne distinguant pas les contributions individuelles des contributions collectives est éliminatoire.\n- Absence de prototypes ou de maquettes : une proposition sans maquettes fonctionnelles annotées (au moins les écrans d'onboarding et de dashboard stress) est éliminatoire.\n- Non-référencement aux normes d'accessibilité RGAA/WCAG : toute interface ne démontrant pas la prise en compte des critères d'accessibilité (contraste, navigation, alternatives textuelles) est éliminatoire.\n- Absence de démarche itérative documentée : le rapport doit présenter au minimum une version initiale de prototype, un rapport de test, et une version améliorée avec les écarts mesurés ; l'absence de cette boucle d'itération est éliminatoire.\n- Indicateurs d'impact non comparés aux objectifs : les KPI doivent être mis en regard des valeurs cibles définies en amont et des performances réelles observées ; toute production se limitant à lister des indicateurs sans comparaison avant/après est éliminatoire.\n- Absence de communication aux parties prenantes : le rapport doit inclure un format de restitution (tableau de bord, présentation synthétique) adapté aux décideurs Lumio Health et à l'investisseur Northgate ; l'omission de cette dimension est éliminatoire.\n\nRéponds EXACTEMENT dans ce format :\n### C.22-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.23-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.24-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.25-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.26-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.27-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
