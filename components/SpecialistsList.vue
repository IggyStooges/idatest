<template>
  <div :class="$style['specialists']">
    <ul :class="$style['specialists__list']">
      <li>
        <div :class="$style['specialists__pic']">
          <img
            src="https://s3-alpha-sig.figma.com/img/fb7f/a4b2/b2836f5487c571729cffa4ef382d30c8?Expires=1601856000&Signature=BVYrPK33c59QSfUd5Y18yyY-cY~VKrnNH7saoDCNHCf2-5WF~XiPeMUxibtgfWqOoqVy93vK9SmAOYxVbh2iqX~lRUdRW4OFP5Z4R5lef8N4EiBwlpNrFqdctD7MyM2IRKUVF8I6zI38Hk~rc6-PHVeoSxCv1TuCTIYghEeuI5gfLuHY~z2M85qCXbmI--4DhrsJ6Pmbdd2Yz3YkAaXxhf3R5dGL4D4MK2zNqVrQAHXOmgNatXGsogpoSbMmf7G6R~YoQOtiZ-1JBbdi5HlC7DhQ~KJ1A-GA59x2Di5t7pPAsPA80ZCL6cIx8aAD9HEmaiEd0fd~iCHcnlhTk67x8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Marvin McKinney"
            width="200"
            height="200"
          />
        </div>
        <div>
          <h3>Marvin McKinney</h3>
          <span>Pilot assistant</span>
        </div>
      </li>
      <li>
        <div :class="$style['specialists__pic']">
          <img
            src="https://www.figma.com/file/C8hEb0LOu61VzEGwKqf04d/image/bfe58b21510ca86917b9c3ccc0913f92357582be"
            alt="Marvin McKinney"
            width="200"
            height="200"
          />
        </div>
        <div>
          <h3>Marvin McKinney</h3>
          <span>Pilot assistant</span>
        </div>
      </li>
      <li>
        <div :class="$style['specialists__pic']">
          <img
            src="https://www.figma.com/file/C8hEb0LOu61VzEGwKqf04d/image/7faebd2e19dbfb770a3df47917ddefb92fef09b1"
            alt="Marvin McKinney"
            width="200"
            height="200"
          />
        </div>
        <div>
          <h3>Marvin McKinney</h3>
          <span>Pilot assistant</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
  },
}
</script>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';

.specialists {
  &__list {
    list-style: none;
    padding-left: 0;
    margin-top: rem(15);
    margin-bottom: rem(15);

    @include min-desktop {
      display: flex;
      justify-content: space-between;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: rem(12);

      @include min-desktop {
        flex-direction: column;
      }

      h3 {
        $color: $--light-black;

        color: $color;
        margin-bottom: rem(5);
      }

      span {
        font-size: rem(12);
      }
    }
  }

  &__pic {
    border-radius: rem(16);
    width: rem(132);
    min-width: rem(132);
    height: rem(80);
    overflow: hidden;
    position: relative;
    margin-right: rem(15);

    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
