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

        <section className="flex max-w-lg flex-col gap-10 text-lg">
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
            <ul className="list-items space-y-2">
              <li>
                Staking and Ecosystem: <b>40%</b>
              </li>
              <li>
                Team and Future Team: <b>20%</b>
              </li>
              <li>
                VC and Advisors: <b>21%</b>
              </li>
              <li>
                Private Sale, IDO, Airdrop: <b>10%</b>
              </li>
              <li>
                Inflation and Reserve: <b>9%</b>
              </li>
            </ul>
          </div>
          <div>
            <p>For investors and team</p>
            <p>
              <b>VC:</b> 19%
            </p>
            <p>
              <b>Team:</b> 13%
            </p>
            <p>
              <b>Future team:</b> 7%
            </p>
            <p>
              <b>Advisors:</b> 2%
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
