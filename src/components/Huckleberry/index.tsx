import './index.css';

export const Huckleberry = () => {
  return (
    <>
      <header>
        <div className='max-width-wrapper'>
          <div className='intro-chunk'>
            <h1 className='title'>Huckleberry</h1>

            <p>
              An avant-garde agency focused on connecting <strong>passion</strong> with{' '}
              <strong>logistics</strong>.
            </p>

            <p>A better way to solve the problems of tomorrow.</p>
          </div>
        </div>
      </header>
      <main>
        <section className='max-width-wrapper'>
          <div className='card'>
            <h2 className='indented-heading'>Wealth comes from operations</h2>
            <p>
              No modern business can thrive without developing a specialization in operations.
              Huckleberry has helped dozens of companies, from Fortune 50 monoliths to fast-growing
              Bay Area startups, achieve their goals and meet their KPIs by leveraging our extensive
              network of logistics experts.
            </p>
            <p>
              Huckleberry was established in 2003 to help ambitious businesses discover their true
              potential. If that resonates, let's chat!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
