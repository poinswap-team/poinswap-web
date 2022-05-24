import { H2, Image, useTheme } from '~/components';

export const CommonTokenomics = () => {
  const { isLight } = useTheme();

  return (
    <div id="common-tokenomics" className="stack items-center gap-10">
      <H2>Tokenomics</H2>

      <div className="flex flex-col gap-10 lg:flex-row">
        <Image
          className="max-h-[400px]"
          alt="Tokenomics Chart"
          src={
            isLight
              ? '/assets/images/tokenomics-light.png'
              : '/assets/images/tokenomics-dark.png'
          }
        />

        <section className="flex max-w-lg flex-col gap-5 text-lg">
          <p>
            Poinswap tokenomics will distributed heavily for Community rewards
            and ecosystem. To make sure the project is sustainable, fair amount
            of tokens will be allocated for investors, team and future teams.
          </p>
          <div>
            <p>
              <b>Token name:</b> $POIN
            </p>
            <p>
              <b>Token supply:</b> 1,000,000,000 POIN
            </p>
          </div>
          <div>
            <p>For community</p>
            <ul className="list-items">
              <li>
                <b>Staking and Ecosystem:</b> 40%
              </li>
              <li>
                <b>Private Sale, IDO, Airdrop:</b> 10%
              </li>
              <li>
                <b>Inflation and Reserve:</b> 9%
              </li>
            </ul>
          </div>
          <div>
            <p>For investors and team</p>
            <ul className="list-items">
              <li>
                <b>VC:</b> 19%
              </li>
              <li>
                <b>Team:</b> 13%
              </li>
              <li>
                <b>Future team:</b> 7%
              </li>
              <li>
                <b>Advisors:</b> 2%
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
