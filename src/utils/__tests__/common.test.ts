import { describe, expect, it, test } from 'vitest';

import { removeUTF8Chars } from '@/utils';

describe('common', () => {
  test('removeUTF8Chars()', () => {
    it('pass without uppercase characters', () => {
      const from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
        to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
      expect(removeUTF8Chars(from)).toBe(to);
    });

    it('pass with uppercase characters', () => {
      expect(removeUTF8Chars('XIN CHÀO')).toBe('xin chao');
    });

    it('pass with uppercase characters and toLowerCase is false', () => {
      expect(removeUTF8Chars('XIN CHÀO', false)).toBe('XIN CHAO');
    });
  });
});
