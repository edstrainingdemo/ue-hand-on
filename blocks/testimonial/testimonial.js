export default function decorate(block) {
  // Fields arrive in the order defined in component-models.json:
  // quote (richtext), author (text), rating (select), featured (boolean)
  const [quoteRow, authorRow, ratingRow, featuredRow] = [...block.children];

  if (quoteRow) quoteRow.className = 'testimonial-quote';
  if (authorRow) authorRow.className = 'testimonial-author';

  if (ratingRow) {
    const rating = ratingRow.textContent.trim();
    ratingRow.className = 'testimonial-rating';
    ratingRow.textContent = '\u2605'.repeat(Number(rating) || 0);
  }

  // boolean fields render as the literal text "true"/"false" in a simple block -
  // read it, then remove the row entirely since it's config, not visible content
  if (featuredRow) {
    const isFeatured = featuredRow.textContent.trim().toLowerCase() === 'true';
    if (isFeatured) block.classList.add('featured');
    featuredRow.remove();
  }
}