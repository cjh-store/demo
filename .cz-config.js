module.exports = {
    types: [
      {
        value: 'ð init',
        name: 'ð init: åå§å',
      },
      {
        value: 'â¨ feat',
        name: 'â¨ feat: æ°åè½',
      },
      {
        value: 'ð fix',
        name: 'ð fix: ä¿®å¤bug',
      },
      {
        value: 'ð¡ perf',
        name: 'ð¡ perf: æ¹è¿ä¼åç¸å³,æ¯å¦æåæ§è½ãä½éª',
      },
      {
        value: 'ð§ wip',
        name: 'ð§ wip: æ­£å¨è¿è¡ä¸­çå·¥ä½',
      },
      {
        value: 'ð¨ test',
        name: 'ð¨ test: æµè¯ï¼å®éª',
      },
      {
        value: 'ð§ chore',
        name: 'ð§ chore: æå»º/å·¥ç¨ä¾èµ/å·¥å·',
      },
      {
        value: 'ð style',
        name: 'ð style: ä»£ç çæ ·å¼ç¾å(æ è®°ãç©ºç½ãæ ¼å¼åãç¼ºå°åå·â¦â¦)',
      },
      {
        value: 'ð release',
        name: 'ð release: åå¸çæ¬',
      },
      {
        value: 'ð move',
        name: 'ð move: ç§»å¨æå é¤æä»¶',
      },
      {
        value: 'âª revert',
        name: 'âª revert: åé',
      },
      {
        value: 'ð merge',
        name: 'ð merge: åå¹¶åæ¯',
      },
      {
        value: 'ð docs',
        name: 'ð docs: ææ¡£åæ´',
      },
    ],
    scopes: ['é¡¹ç®'], // é¡¹ç®æ¨¡ååå¯åå¨è¿é æ¹ä¾¿å¿«æ·éæ©
    skipQuestions: ['body', 'footer'],
    messages: {
      type: 'éæ©ä¸ç§ä½ çæäº¤ç±»å( å¿é â):',
      scope:
        'è¯·éæ©ä¿®æ¹èå´(æ¯æèªå®ä¹)\n ð¬ ä¸å¡é¡¹ç®ä¸­ä¾æ®èåæèåè½æ¨¡ååå(å¯é)ï¼\n',
      subject: 'è¯·ç®è¦æè¿°æäº¤( å¿å¡« â)ï¼\n',
      body: 'è¯·è¾å¥è¯¦ç»æè¿°ä½¿ç¨," | "æ¢è¡(å¯é)ï¼\n',
      breaking: 'ååºä»»ä½BREAKING CHANGES(å¯é)ï¼\n',
      confirmCommit: 'ç¡®å®æäº¤æ­¤è¯´æåï¼',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'], // å½æäº¤ç±»åä¸ºfeatãfixæ¶ææç ´åæ§ä¿®æ¹éé¡¹
    subjectLimit: 72,
  }