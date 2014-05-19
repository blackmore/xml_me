var Program = DS.Model.extend({
                channel: DS.attr('string'),
                date: DS.attr('string'),
                time: DS.attr('string'),
                stereo: DS.attr('string'),
                format: DS.attr('string'),
                title: DS.attr('string'),
                episode: DS.attr('string'),
                year: DS.attr('string'),
                org_episode_title: DS.attr('string'),
                org_title: DS.attr('string'),
                text: DS.attr('string'),
                background: DS.attr('string')
});

Program.reopenClass({
  FIXTURES: [
    { 
        id: 1,
        channel: "some text",
        date: "some date",
        time: "343434",
        stereo: "some text",
        format: "some text",
        title: "some text",
        episode: "some text",
        year: "some text",
        org_episode_title: "some text",
        org_title: "some text",
        text: "some text",
        background: "some text"
    },
    { 
        id: 2,
        channel: "some second bit of text",
        date: "some second bit of date",
        time: "4545445",
        stereo: "some second bit of text",
        format: "some second bit of text",
        title: "some second bit of text",
        episode: "some second bit of text",
        year: "some second bit of text",
        org_episode_title: "some second bit of text",
        org_title: "some second bit of text",
        text: "some second bit of text",
        background: "some second bit of text"
    }
    ]
  });

export default Program;