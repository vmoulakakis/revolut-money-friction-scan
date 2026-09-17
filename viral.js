(() => {
  const OFFICIAL = {
    en: 'https://www.revolut.com/en-GR/our-pricing-plans/',
    el: 'https://www.revolut.com/el-GR/our-pricing-plans/',
    de: 'https://www.revolut.com/de-DE/our-pricing-plans/',
    fr: 'https://www.revolut.com/fr-FR/our-pricing-plans/',
    es: 'https://www.revolut.com/es-ES/our-pricing-plans/'
  };

  const COPY = {
    en: {
      badge: 'THE 60-SECOND MONEY FRICTION CHALLENGE',
      title: 'What is your Money Friction Number?',
      body: 'Turn tiny FX markups, ATM charges and transfer fees into one annual number. If the result surprises you, challenge a friend to run theirs.',
      share: 'Challenge a friend',
      compare: 'Compare Revolut Standard',
      shareLead: 'My Money Friction Scan came to',
      shareTail: 'per year from the fees I entered. What is yours?',
      privacy: 'No signup. No email. Your inputs stay in this browser.',
      facts: ['€0 / £0 Standard monthly plan fee', 'weekday FX fair-use allowance depends on market', 'ATM fair-use allowance applies; third-party fees can still apply'],
      source: 'Current plan limits and fees can change — verify them on Revolut before acting.'
    },
    el: {
      badge: 'ΤΟ 60″ MONEY FRICTION CHALLENGE',
      title: 'Πόσο σου κοστίζουν πραγματικά οι «μικρές» τραπεζικές χρεώσεις;',
      body: 'Βάλε τα δικά σου ποσά και δες έναν ετήσιο αριθμό για FX markup, ATM και μεταφορές. Αν σε εκπλήξει, στείλε το challenge σε έναν φίλο να βγάλει τον δικό του αριθμό.',
      share: 'Στείλε το challenge',
      compare: 'Σύγκρινε με Revolut Standard',
      shareLead: 'Το Money Friction Scan μου έβγαλε',
      shareTail: 'τον χρόνο από τις χρεώσεις που έβαλα. Πόσο βγαίνει το δικό σου;',
      privacy: 'Χωρίς εγγραφή · χωρίς email · οι τιμές μένουν στον browser σου.',
      facts: ['Standard: 0 € / μήνα', 'έως 1.000 € FX Δευ–Παρ χωρίς πρόσθετη χρέωση fair-use', 'έως 200 € ή 5 αναλήψεις ATM χωρίς χρέωση Revolut ανά μήνα'],
      source: 'Ισχύουν όρια, weekend/fair-use και πιθανές χρεώσεις τρίτων. Έλεγξε πάντα τους τρέχοντες επίσημους όρους.'
    },
    de: {
      badge: 'DIE 60-SEKUNDEN MONEY-FRICTION-CHALLENGE',
      title: 'Wie hoch ist deine Money-Friction-Zahl?',
      body: 'Mach aus kleinen FX-Aufschlägen, ATM- und Transfergebühren eine Jahreszahl. Wenn sie dich überrascht, fordere einen Freund heraus.',
      share: 'Freund herausfordern',
      compare: 'Revolut Standard vergleichen',
      shareLead: 'Mein Money Friction Scan ergibt',
      shareTail: 'pro Jahr aus meinen eingegebenen Gebühren. Wie hoch ist deiner?',
      privacy: 'Keine Anmeldung · keine E-Mail · Eingaben bleiben im Browser.',
      facts: ['Standard ohne monatliche Abo-Gebühr', 'Fair-Use-Grenzen für FX gelten', 'ATM-Fair-Use-Grenzen und mögliche Fremdgebühren gelten'],
      source: 'Aktuelle Limits und Gebühren immer vor der Nutzung bei Revolut prüfen.'
    },
    fr: {
      badge: 'LE CHALLENGE MONEY FRICTION EN 60 SECONDES',
      title: 'Quel est votre Money Friction Number ?',
      body: 'Transformez petites marges de change, retraits et transferts en un seul coût annuel. Si le chiffre surprend, défiez un proche.',
      share: 'Défier un proche',
      compare: 'Comparer Revolut Standard',
      shareLead: 'Mon Money Friction Scan affiche',
      shareTail: 'par an avec les frais que j’ai saisis. Et vous ?',
      privacy: 'Sans inscription · sans e-mail · données conservées dans le navigateur.',
      facts: ['Standard sans abonnement mensuel', 'des limites fair-use de change s’appliquent', 'des limites ATM et frais tiers peuvent s’appliquer'],
      source: 'Vérifiez toujours les tarifs et limites officiels en vigueur.'
    },
    es: {
      badge: 'EL RETO MONEY FRICTION DE 60 SEGUNDOS',
      title: '¿Cuál es tu Money Friction Number?',
      body: 'Convierte pequeños márgenes de cambio, cajeros y transferencias en una cifra anual. Si te sorprende, reta a alguien a calcular la suya.',
      share: 'Retar a un amigo',
      compare: 'Comparar Revolut Standard',
      shareLead: 'Mi Money Friction Scan da',
      shareTail: 'al año con las comisiones que introduje. ¿Cuál es el tuyo?',
      privacy: 'Sin registro · sin email · los datos se quedan en tu navegador.',
      facts: ['Standard sin cuota mensual', 'se aplican límites fair-use de cambio', 'se aplican límites ATM y pueden existir cargos de terceros'],
      source: 'Comprueba siempre las tarifas y límites oficiales vigentes.'
    }
  };

  if (typeof T !== 'undefined') {
    T.el = {
      code:'el-GR', currency:'EUR', symbol:'€',
      eyebrow:'Ελλάδα · 60″ money friction challenge',
      headline:'Οι «μικρές» τραπεζικές χρεώσεις μπορεί να γίνονται μεγάλο ετήσιο ποσό.',
      subhead:'Βάλε τα δικά σου έξοδα σε συνάλλαγμα, ΑΤΜ και μεταφορές. Σε 60 δευτερόλεπτα θα δεις τη δική σου ετήσια Money Friction Number — και μετά αποφασίζεις αν αξίζει να συγκρίνεις Revolut.',
      cta:'Βρες τη δική μου Money Friction Number',
      micro:'Χωρίς signup · χωρίς email · αλλάζεις κάθε υπόθεση',
      proofs:[['0 €','Standard / μήνα'],['1.000 €','weekday FX fair-use'],['200 € / 5','ATM fair-use']],
      orb:'προσωπικό scan', orbSmall:'4 στοιχεία · 1 καθαρός αριθμός',
      signals:[['Συνάλλαγμα','τα δικά σου δεδομένα'],['ATM','μέσα στον υπολογισμό'],['Μεταφορές','μέσα στον υπολογισμό']],
      localKicker:'Γιατί αυτό έχει νόημα στην Ελλάδα',
      localTitle:'Μην ξεκινάς από το “ποια κάρτα είναι καλύτερη”. Ξεκίνα από το τι πληρώνεις ήδη.',
      localBody:'Το εργαλείο δεν υπόσχεται αποταμίευση. Μετατρέπει τις δικές σου χρεώσεις σε ετήσιο κόστος και σου δίνει ένα καθαρό σημείο σύγκρισης πριν επιλέξεις πάροχο.',
      factLabel:'Revolut Standard · weekday FX fair-use', fact:'1.000 € / μήνα',
      factNote:'Πάνω από το όριο και τα Σαββατοκύριακα μπορεί να εφαρμόζονται πρόσθετες χρεώσεις. Έλεγξε τους τρέχοντες όρους.',
      s1:'Τα σημερινά σου δεδομένα', s1t:'Φτιάξε το προσωπικό σου fee fingerprint',
      spend:'Έξοδα σε ξένο νόμισμα / μήνα', spendHint:'Ταξίδια, online αγορές, συνδρομές.',
      markup:'FX markup της τράπεζας/κάρτας σου', markupHint:'Βάλε το πραγματικό ποσοστό που χρεώνεσαι.',
      atm:'Χρεώσεις ATM / μήνα', atmHint:'Μόνο ό,τι πραγματικά πληρώνεις.',
      transfer:'Χρεώσεις μεταφορών / μήνα', transferHint:'Διεθνείς ή διασυνοριακές μεταφορές.',
      calc:'Δείξε μου το ετήσιο κόστος',
      s2:'Ο αριθμός σου', s2t:'Από μικρά ποσοστά σε ένα ετήσιο ποσό',
      annual:'Εκτιμώμενο ετήσιο money friction', annualExplain:'Δεν είναι υπόσχεση εξοικονόμησης. Είναι η ετήσια προβολή των ποσών που έβαλες εσύ.',
      score:'friction score', breaks:['FX markup','ATM','Μεταφορές'], possible:'Δυνητικά συγκρίσιμο*',
      evidenceTitle:'Σκόπιμα συντηρητικός υπολογισμός',
      evidence:'Δεν θεωρούμε ότι όλες οι χρεώσεις εξαφανίζονται. Η σύγκριση πρέπει να γίνει με τους τρέχοντες όρους, τα fair-use όρια και τυχόν χρεώσεις τρίτων.',
      s3:'Απόφαση, όχι hype', s3t:'Αξίζει να συγκρίνεις Revolut με αυτό που χρησιμοποιείς τώρα;', fit:'Το fit signal σου',
      high:'Υψηλό money friction', med:'Μεσαίο money friction', low:'Χαμηλό money friction',
      highText:'Οι τιμές που έβαλες δείχνουν επαναλαμβανόμενες χρεώσεις. Έχει νόημα να συγκρίνεις αναλυτικά το Revolut Standard με την τωρινή σου λύση, ειδικά για ταξίδια και FX.',
      medText:'Υπάρχει πιθανό όφελος, αλλά εξαρτάται από το πότε κάνεις FX, πόσο χρησιμοποιείς ATM και τι είδους μεταφορές κάνεις.',
      lowText:'Η σημερινή σου λύση φαίνεται ήδη αρκετά αποδοτική. Η σύγκριση μπορεί να έχει περισσότερο νόημα για ευκολία και features παρά για χρεώσεις.',
      ref:'Σύγκρινε τα επίσημα προγράμματα Revolut', share:'Μοιράσου τον αριθμό μου',
      disclosure:'Ο δημόσιος σύνδεσμος οδηγεί στους επίσημους όρους/προγράμματα Revolut. Δεν δημοσιεύουμε προσωπικό referral link σε μαζικό marketing.',
      toast:'Το challenge είναι έτοιμο για κοινοποίηση.',
      pk:'Στοιχεία πριν από slogans', pt:'Τρεις συγκεκριμένοι έλεγχοι πριν πατήσεις “άνοιγμα λογαριασμού”',
      cards:[
        ['0 € Standard / μήνα','Το Standard πρόγραμμα δεν έχει μηνιαία χρέωση.','https://help.revolut.com/el-GR/help/profile-and-plan/my-plan-benefits/revolut-plans1/standard-plan/'],
        ['1.000 € weekday FX','Στο Standard ισχύει fair-use έως 1.000 € τον μήνα Δευτέρα–Παρασκευή χωρίς πρόσθετη χρέωση· μετά εφαρμόζεται 1%.','https://help.revolut.com/en-GR/help/wealth/exchanging-money/how-much-does-it-cost-to-make-an-exchange/will-i-be-charged-for-exchanging-foreign-currencies/'],
        ['200 € ή 5 ATM','Στο Standard: έως 200 € ή 5 αναλήψεις χωρίς χρέωση Revolut ανά μήνα, όποιο συμβεί πρώτο. Τρίτοι πάροχοι ATM μπορεί να χρεώνουν.','https://www.revolut.com/el-GR/legal/standard-fees/']
      ],
      faqs:[
        ['Μου εγγυάται εξοικονόμηση;','Όχι. Ο υπολογισμός χρησιμοποιεί αποκλειστικά τα στοιχεία που βάζεις εσύ και δεν προβλέπει τις πραγματικές μελλοντικές σου χρεώσεις.'],
        ['Γιατί είναι πιο χρήσιμο από μια απλή διαφήμιση;','Επειδή πρώτα βλέπεις το δικό σου ετήσιο κόστος και μετά συγκρίνεις. Δεν χρειάζεται να πιστέψεις έναν γενικό ισχυρισμό “θα γλιτώσεις Χ”.'],
        ['Είναι επίσημο site της Revolut;','Όχι. Είναι ανεξάρτητο εκπαιδευτικό εργαλείο σύγκρισης και δεν αποτελεί οικονομική συμβουλή.']
      ],
      fees:'Επίσημες χρεώσεις Standard', help:'Revolut Help Centre',
      footer:'Ανεξάρτητο εργαλείο ενημέρωσης/σύγκρισης. Δεν είναι Revolut και δεν αποτελεί οικονομική συμβουλή.'
    };
  }

  const langSelect = document.getElementById('langSelect');
  if (langSelect && !langSelect.querySelector('option[value="el"]')) {
    const opt = document.createElement('option');
    opt.value = 'el';
    opt.textContent = 'EL';
    langSelect.prepend(opt);
  }

  function activeLang() {
    return (typeof currentLang !== 'undefined' && COPY[currentLang]) ? currentLang : (document.documentElement.lang || 'en').slice(0,2);
  }

  function ensureChallenge() {
    if (document.getElementById('viralChallenge')) return;
    const decision = document.querySelector('.decision');
    if (!decision) return;
    const section = document.createElement('section');
    section.id = 'viralChallenge';
    section.className = 'viral-loop shell';
    section.innerHTML = `
      <div class="viral-card">
        <div>
          <span class="viral-badge" id="viralBadge"></span>
          <h2 id="viralTitle"></h2>
          <p id="viralBody"></p>
          <div class="viral-facts" id="viralFacts"></div>
          <small id="viralSource"></small>
        </div>
        <div class="viral-number">
          <span>YOUR NUMBER</span>
          <strong id="viralNumber">—</strong>
          <button class="primary" id="viralShare"></button>
          <small id="viralPrivacy"></small>
        </div>
      </div>`;
    decision.insertAdjacentElement('afterend', section);
  }

  function getAnnualText() {
    const el = document.getElementById('annualValue');
    return el && el.textContent && el.textContent !== '—' ? el.textContent : '—';
  }

  async function shareChallenge() {
    const lang = activeLang();
    const c = COPY[lang] || COPY.en;
    const number = getAnnualText();
    const text = number === '—'
      ? `${c.title} ${location.origin}${location.pathname}?lang=${lang}`
      : `${c.shareLead} ${number} ${c.shareTail}`;
    const url = `${location.origin}${location.pathname}?lang=${lang}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Money Friction Challenge', text, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text} ${url}`);
        const toast = document.getElementById('toast');
        if (toast) toast.textContent = lang === 'el' ? 'Αντιγράφηκε — στείλ’ το σε έναν φίλο.' : 'Copied — send it to a friend.';
      }
    } catch (_) {}
  }

  function applyViralLayer() {
    ensureChallenge();
    const lang = activeLang();
    const c = COPY[lang] || COPY.en;

    const badge = document.getElementById('viralBadge');
    const title = document.getElementById('viralTitle');
    const body = document.getElementById('viralBody');
    const facts = document.getElementById('viralFacts');
    const source = document.getElementById('viralSource');
    const number = document.getElementById('viralNumber');
    const privacy = document.getElementById('viralPrivacy');
    const share = document.getElementById('viralShare');
    if (badge) badge.textContent = c.badge;
    if (title) title.textContent = c.title;
    if (body) body.textContent = c.body;
    if (facts) facts.innerHTML = c.facts.map(x => `<span>✓ ${x}</span>`).join('');
    if (source) source.textContent = c.source;
    if (number) number.textContent = getAnnualText();
    if (privacy) privacy.textContent = c.privacy;
    if (share) { share.textContent = c.share; share.onclick = shareChallenge; }

    const referral = document.getElementById('referralCta');
    if (referral) {
      referral.href = OFFICIAL[lang] || OFFICIAL.en;
      referral.rel = 'noopener';
      referral.textContent = c.compare;
    }

    const oldShare = document.getElementById('shareBtn');
    if (oldShare && !oldShare.dataset.viral) {
      const fresh = oldShare.cloneNode(true);
      fresh.dataset.viral = '1';
      fresh.textContent = c.share;
      oldShare.replaceWith(fresh);
      fresh.addEventListener('click', shareChallenge);
    } else if (oldShare) {
      oldShare.textContent = c.share;
    }

    const updated = document.getElementById('updatedAt');
    if (updated) updated.textContent = lang === 'el' ? 'Στοιχεία ελεγμένα 17 Σεπ 2026' : 'Evidence checked 17 Sep 2026';
  }

  const originalCalculate = document.getElementById('calculateBtn');
  if (originalCalculate) originalCalculate.addEventListener('click', () => setTimeout(applyViralLayer, 0));
  if (langSelect) langSelect.addEventListener('change', () => setTimeout(applyViralLayer, 0));

  const requested = new URLSearchParams(location.search).get('lang');
  const browserGreek = (navigator.language || '').toLowerCase().startsWith('el');
  if (typeof render === 'function' && (requested === 'el' || (!requested && browserGreek))) render('el');

  applyViralLayer();
})();