import { H2, H3, ImageInteractive, RemixLink } from '~/components';

/**
 * Private Sale Schedule
 */
export const PrivateSaleSchedule = () => {
  return (
    <div id="story-private-sale">
      <div className="flex flex-col items-center gap-8 p-12">
        <H2 className="text-center lg:text-left">
          Private sale is coming soon
        </H2>
        <H3>Trade, Shop, Earn</H3>

        <section className="flex flex-col flex-wrap gap-5  text-lg lg:flex-row lg:gap-20">
          <div>
            <ImageInteractive
              className="scale-x-[-1]"
              alt="Shark Slime"
              srcNormal="/assets/characters/slime-4-a.png"
              srcHover="/assets/characters/slime-4-b.png"
              width={200}
            />
          </div>

          <div className="stack gap-5">
            <div>
              <p className="font-bold">1st Round TBA</p>
              <p>1 BUSD = 100 POIN</p>
            </div>
            <div>
              <p className="font-bold">2nd Round TBA</p>
              <p>1 BUSD = 50 POIN</p>
            </div>
            <div>
              <p className="font-bold">3rd Round TBA</p>
              <p>1 BUSD = 25 POIN</p>
            </div>
          </div>

          <div className="stack gap-5">
            <div>
              <p>
                <b>Hard cap:</b> 500,000 BUSD
              </p>
              <p>
                <b>Soft cap:</b> 150,000 BUSD
              </p>
            </div>
            <div>
              <p>
                <b>Minimum buy:</b> 100 BUSD
              </p>
              <p>
                <b>Maximum buy:</b> 10,000 BUSD
              </p>
            </div>
            <div>
              <p>
                <b>Token accepted:</b>
              </p>
              <p>USDT, BUSD, BNB, AVAX</p>
            </div>
          </div>
        </section>

        <div>
          <RemixLink
            to="/privatesale"
            className="btn btn-lg btn-solid rounded-base"
            data-color="primary"
          >
            Get More Details
          </RemixLink>
        </div>
      </div>
    </div>
  );
};
